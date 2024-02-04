import jwt from "jsonwebtoken"
import {ApiResponse} from '../utilities/ApiResponse.js'
import {asyncHandler} from '../utilities/asyncHandler.js';
import { ApiError } from "../utilities/ApiError.js";
import { User } from "../models/jobs/user.models.js";
import { uploadOnCloudinary } from "../utilities/cloudinary.js";

const generateAccessAndRefreshTokens = async (userId) =>{
  try {
    
    const user = await User.findById(userId)
    
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()
    
    user.refreshToken = refreshToken
    user.accessToken = accessToken
      
    await user.save({validateBeforeSave: false})

    return {accessToken, refreshToken}

  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating refresh and access token")
  }
} 

const registerUser = asyncHandler( async(req, res) => {
    //get data from user from frontend
    //validation of data
    //check if user already exists: username, email
    //check for images, check for avatar
    //upload them to cloudinary
    //create user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response

    //save to database

    //return user data after saving to database 

    //TODO: create required inputs in frontend
  const {fullName, firstName,middleName, lastName, userName, dateOfBirth, email, password,bio, gender, address, displayPictureUrl, coverImageUrl ,about}=  req.body
  console.log("email: ", email);

  if(
    [fullName, email, firstName, middleName, lastName, userName , dateOfBirth, password].some((field)=> field?.trim()==="" )
  ){
    throw new ApiError(400, "All fields are required")
  }

const existedUser = await User.findOne({
    $or: [{userName},{email}]
})

if(existedUser){
    throw new ApiError(409, "User already exists")
}

const displayPictureLocalPath =  req.files?.displayPicture[0]?.path
const coverImageLocalPath =  req.files?.coverImage[0]?.path

    if (!displayPictureLocalPath) {
        throw new ApiError(400, "display picture is required")
    }

   const displayPicture =  await uploadOnCloudinary(displayPictureLocalPath)
   const coverImage = await uploadOnCloudinary(coverImageLocalPath)

   //throw error if dp or coverImage is null
   const user = await User.create({
    fullName,
    email,
    userName: userName.toLowerCase(),
    password, 
   })

   const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
   )

   if(!createdUser)
   {
    throw new ApiError(500, "Something went wrong while registering the user")
   }

   return res.status(201).json(
    new ApiResponse(200,createdUser, "User registered successfully" )
   )

})

const loginUser = asyncHandler(async (req, res) => {
  //take username or email and passowrd from Frontend
  const {userName, email,  password} = req.body
  if(!userName && !email)
  {
    throw new ApiError(400, "username or email is required")
  }

  //check if email/username exist
    const user = await User.findOne({
      $or: [{userName}, {email}] 
    })
  
    if(!user)
    {
      throw new ApiError(404, "User does not exist")
    }
    //if it exists then check if password is correct or not
    
    const isPassowrdValid = await user.isPasswordCorrect(password)
    
      if(!isPassowrdValid)
      {
        throw new ApiError(401, "Invalid User Credentials")
      }
  //generate refresh token and access token
     const {accessToken, refreshToken} =  await generateAccessAndRefreshTokens(user._id)

     const loggedInUser =  await User.findById(user._id).select("-password -refreshToken")
     
     //send cookies
     const options = {
      httpOnly: true,
      secure: true
     }

     return res.status(200).cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options).json(new ApiResponse(200, {
      user: loggedInUser, accessToken, refreshToken
     },"User logged in successfully"
     ))
  
})

const logoutUser = asyncHandler(async(req, res)=> {
  
  // await User.findById()
  await User.findByIdAndUpdate(req.user._id,
    {
      $set: {
      refreshToken: undefined
    }},
    {
      new: true
    }
  )

  const options = {
    httpOnly: true,
    secure: true
   }

   return res.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options).json(new ApiResponse(200, {}, "Logout successfully"))
})

const refreshAccessToken = asyncHandler(async(req, res)=>{
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

  if(!incomingRefreshToken)
  {
    throw new ApiError(401, "Unauthorized request")
  }

  try {
    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
  
    const user = await User.findById(decodedToken?._id)
  
    if(!user){
      throw new ApiError(401, "Invalid refresh token")
    }
  
    if(incomingRefreshToken !== user?.refreshToken)
    {
      throw new ApiError(401, "Refresh token is expired or used")
    }
  
    const options = {
      httpOnly:true,
      secure: true,
    }
    
    const {accessToken, newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
  
    return res.status(200).cookie("accessToken", accessToken).cookie("refreshToken", newRefreshToken).json(new ApiResponse(200, {accessToken, newRefreshToken}, "Access token refreshed"))
  
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refreshToken")
  }


})

const changeCurrentPassword = asyncHandler(async(req, res) => {
  
  const {oldPassword, newPassowrd} = req.body
  
  const user = await User.findById(req.user?._id)

  const isPasswordCorrect =  await user.isPasswordCorrect(oldPassword)
if(!isPasswordCorrect)
{
  
  throw new ApiError(400, "Invalid old passord")


}

user.password = newPassowrd

user.save({validateBeforeSave: false})


return res.status(200).json(new ApiResponse(200, {}, "Password changed succesfully"))

})

const getCurrentUser = asyncHandler(async(req, res)=> {
  return res.status(200).json(new ApiResponse(200, req.user, "Current user fetched successfully"))
})

const updateAccountDetails = asyncHandler(async(req, res)=>{
  const {fullName, email} = req.body

  if(!fullName || !email)
  {
    throw new ApiError(400, "All fields are required")
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set:{
        fullName,
        email,
        
      }
  },
  {
    new: true
  } ).select("-password")

  return res.status(200).json(new ApiResponse(200, updatedUser, "Account details updated successfully"))
  
}) 


const updateUserDisplayPicture = asyncHandler(async(req, res)=> {
  const avatarLocalPath = req.file?.path

  if(!avatarLocalPath){
    throw new ApiError(400, "Display picture file is missing")
  }

  const displayPicture = await uploadOnCloudinary(displayPictureLocalPath)

  if(!displayPicture.url)
  {
    throw new ApiError(400, "Error while uploading on display picture")
  }

  const user = await User.findByIdAndUpdate(req.user?._id,
    {
      $set: {
        displayPictureUrl: displayPicture.url
      }
    }
    ,{new: true}).select("-password")

    
    return res.status(200).json(new ApiResponse(200, "Display picture updated succesfully"))


})
const updateUserCoverImage = asyncHandler(async(req, res)=> {
  const coverImageLocalPath = req.file?.path

  if(!coverImageLocalPath){
    throw new ApiError(400, "Display picture file is missing")
  }

  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!coverImage.url)
  {
    throw new ApiError(400, "Error while uploading on cover image")
  }

  const user = await User.findByIdAndUpdate(req.user?._id,
    {
      $set: {
        coverImageUrl: coverImage.url
      }
    }
    ,{new: true}).select("-password")

    return res.status(200).json(new ApiResponse(200, "Cover Image updated succesfully"))
})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserDisplayPicture,
    updateUserCoverImage
}