import {asyncHandler} from '../utilities/asyncHandler.js';
import { ApiError } from "../utilities/ApiError.js";
import { User } from "../models/jobs/user.models.js";
import { uploadOnCloudinary } from "../utilities/cloudinary.js";

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

const existedUser =   User.findOne({
    $or: [{username},{email}]
})

if(existedUser){
    throw new ApiError(409, "User already exists")
}

const displayPictureLocalPath =  req.files?.displayPicture[0]?.path
const coverImageLocalPath =  req.files?.coverImage[0]?.path

    if (!displayPictureLocalPath) {
        throw new ApiError(400, "display picture is required")
    }
})

export {
    registerUser
}