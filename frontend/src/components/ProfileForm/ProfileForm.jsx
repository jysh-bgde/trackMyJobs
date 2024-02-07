import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../../context/UserContext'

const ProfileForm = () => {
    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)

    const {user, setUser} = useContext(UserContext)

       
    
    console.log(user)

    //create handleProfileSave Function
    function handleProfileSave(e){
        //preventDefault
        e.preventDefault()

        //post req to /api/v1/users/updateAccountDetails with necessary details
       const response =  axios.post("/api/v1/users/updateAccountDetails", {

        })

        //show modal message
        setModalBodyMessage(response.data.message)

        if(response.data.success)
        {
           
            // update user using context
            setUser(response.data.data.user)
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <div  className=' bg-white my-3 p-3 border-2 rounded-md'>
            <form >
                <div className='p-3 flex justify-between items-center'>
                    <img className='border-2 rounded-md mx-3' src="displayPictureSample.png" alt="display picture" height={128} width={128}/>
                    <button  className='border-green-500 self-end px-3 rounded-md border-2'>change display picture </button>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='firstName' >First Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="firstName" id="firstName" required value={user.firstName}/>
                </div>

                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='middleName'>Middle Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="middleName" id="middleName" value={user.middleName} />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='lastName' >Last Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="lastName" id="lastName" required value={user.lastName}/>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="date" name="dob" id="dob" required value={user.dateOfBirth} />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="address">Address:</label>
                    <textarea className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} name="address" id="address" required value={user.address} />
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