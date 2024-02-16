import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {Button} from 'flowbite-react'

const ProfileForm = () => {
    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)
    const [isChangeDisplayPictureButtonClicked, setIsChangeDisplayPictureButtonClicked] = useState(false)
    const [isChangeCoverImageButtonClicked, setIsChangeCoverImageButtonClicked] = useState(false)
    const [displayPicture, setDisplayPicture] = useState("")
    const [coverImage, setCoverImage] = useState("")

    const {user, setUser} = useContext(UserContext)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

      if(user)
      {
        setIsAuthenticated(true)
        setDisplayPicture(user.displayPictureUrl)
        setCoverImage(user.coverImageUrl)
    }
      else
      {
        setIsAuthenticated(false)
        navigate("/error")
      }
      
    }, [isAuthenticated, user, displayPicture, coverImage])
    


    //const displayPictureInput = useRef()
    //   create function to save display picture
   async function handleDisplayImageSave(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append("displayPicture", displayPicture)

      
        // console.log(displayPicture)
        

        //     when change display picture is clicked button changes to save display picture
        //     input field appears to select image
        //     after clicking save, post via axios to save image in user data
          const response = await axios.post("/api/v1/users/update-display-picture", formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
        
          //     get response, save in session storage and save user using setUser
          sessionStorage.setItem("user", JSON.stringify(response.data.data))
          
          setUser(response.data.data)
          //     display display picture
    }

    async function handleCoverImageSave(e)
    {
        e.preventDefault()

        const formData = new FormData()
        formData.append("coverImage", coverImage)

        const response = await axios.post("/api/v1/users/update-cover-image",formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        
        //     get response, save in session storage and save user using setUser
        sessionStorage.setItem("user", JSON.stringify(response.data.data))
        
        setUser(response.data.data)
        //     display display picture


    }





    

       
    

    //create handleProfileSave Function
   async function handleProfileSave(e){
        //preventDefault
        e.preventDefault()
        console.log(user)
        //post req to /api/v1/users/updateAccountDetails with necessary details
       const response =  await axios.post("/api/v1/users/updateAccountDetails", {
       firstName: user.firstName,
       lastName: user.lastName,
       middleName: user.middleName,
       dateOfBirth: user.dateOfBirth,
       address: user.address,
        })

        //show modal message
        //setModalBodyMessage(response.data.message)
        if(response.data.success)
        {
            
            console.log(response.data.data)
            // update user using context
           sessionStorage.setItem("user", JSON.stringify(response.data.data))
            setUser(response.data.data)
        }else
        {
            navigate("/error")
        }
    }
    
    async function handleRemoveDisplayPicture(e)
    {
        // prevent default
        e.preventDefault()
        //call backend using axios -- get method to remove display picture
        const response = await axios.get("/api/v1/users/remove-display-picture")
        //if response is okay update user data
        if(response.data.success)
        {
            sessionStorage.setItem("user", JSON.stringify(response.data.data))
            setUser(sessionStorage.getItem("user"))
        }else
        {
            //if response not ok show error
            navigate("/error")
        }

    }

    async function handleRemoveCoverImage(e)
    {
        //prevent default
        e.preventDefault()
        //call backend to remove cover image using axios -- get method 
        const response = await axios.get("/api/v1/users/remove-cover-image")
        //if response is ok then update user data
        if(response.data.success)
        {
            sessionStorage.setItem("user", JSON.stringify(response.data.data))
        }
        else
        {
            //if response is not ok then show error
            navigate("/error")
            
        }
    }

    return (
        
        <div className='flex justify-center items-center'>
            <div  className='bg-white my-3 p-3 border-2 rounded-md'>
            <form  >
                <div className='p-3 flex justify-between items-center'>
                <div className='flex flex-col items-center'>
                    <img className='border-2 rounded-md mx-3' src={user?.displayPictureUrl || "displayPictureSample.png"} alt="display picture" height={128} width={128}/>
                   
                    <div >

                    
                    {isChangeDisplayPictureButtonClicked ? (
                    <>
                    
                    <input accept="image/png, image/jpeg" onChange={(e) => {setDisplayPicture(e.target.files[0])}}   type='file' name='displayPicture' />
                    
                    <Button color='success' className='my-1 mr-1'  onClick={(e) => {setIsChangeDisplayPictureButtonClicked(!isChangeDisplayPictureButtonClicked), handleDisplayImageSave(e)} }>Save </Button>
                    </>) :(
                    <Button color='success' className='my-1 mr-1'  onClick={(e) => {setIsChangeDisplayPictureButtonClicked(!isChangeDisplayPictureButtonClicked)} }>change display picture </Button>)}
                   {user.displayPictureUrl && <Button color="failure" className='mr-1 my-1' onClick={handleRemoveDisplayPicture}> Remove display picture</Button>}
                    </div>

                    </div>
                    <div className='flex flex-col items-end'>

                    <img className='border-2 rounded-md' src={user?.coverImageUrl || "coverImageSample.jpg"} alt="Cover Image" height={1920} width={1280}/>
                     <div className='flex' >
                 
                    {user.coverImageUrl && <Button color="failure" className='m-1' onClick={handleRemoveCoverImage}>Remove cover Image</Button>}

                    {isChangeCoverImageButtonClicked ? (
                    <>
                    
                    <input accept="image/png, image/jpeg" onChange={(e) => {setCoverImage(e.target.files[0])}}   type='file' name='coverImage' />
                    
                    <Button color='success'   className='my-1'  onClick={(e) => {setIsChangeCoverImageButtonClicked(!isChangeCoverImageButtonClicked), handleCoverImageSave(e)} }>Save </Button>
                    </>) :(
                    <Button  color='success' className='my-1'  onClick={(e) => {setIsChangeCoverImageButtonClicked(!isChangeCoverImageButtonClicked)} }>change Cover Image </Button>)}

                    </div>


                    </div>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='firstName' >First Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="firstName" id="firstName" required value={user?.firstName} onChange={(e) =>setUser({...user, firstName: e.target.value}) }/>
                </div>

                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='middleName'>Middle Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="middleName" id="middleName" value={user?.middleName} onChange={(e) =>setUser({...user, middleName: e.target.value}) } />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='lastName' >Last Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="lastName" id="lastName" required value={user?.lastName} onChange={(e) =>setUser({...user, lastName: e.target.value}) }/>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="date" name="dob" id="dob" required value={user?.dateOfBirth} onChange={(e) =>setUser({...user, dateOfBirth: e.target.value}) }/>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="address">Address:</label>
                    <textarea className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} name="address" id="address" required value={user?.address} onChange={(e) =>setUser({...user, address: e.target.value}) } />
                </div>
              

                {isEditButtonClicked ? (<button 
                className='bg-green-500 self-end px-3 rounded-md ' type='button' onClick={(e) => { setIsEditButtonClicked(!isEditButtonClicked); handleProfileSave(e) }}> Save </button>) : (<button 
                className='border-green-500 self-end px-3 rounded-md border-2'
                type='button' onClick={() => { setIsEditButtonClicked(!isEditButtonClicked) }}>Edit</button>)}

                {/* <label htmlFor="currentlyWorkingAt">Currently working at:</label>
            <input name='currentlyWorkingAt' id='currentlyWorkingAt'/>

            <label htmlFor='isCurrentlyWorking'>Is currently working?</label>
            <input type="checkbox" name="isCurrentlyWorking" id="isCurrentlyWorking" checked/> */}


            </form>
            </div>
        </div>
    )
}

export default ProfileForm