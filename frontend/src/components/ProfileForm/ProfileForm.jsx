import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import axios from "axios"

const ProfileForm = () => {
    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)

    const {user, setUser} = useContext(UserContext)

       
    

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
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="firstName" id="firstName" required value={user.firstName} onChange={(e) =>setUser({...user, firstName: e.target.value}) }/>
                </div>

                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='middleName'>Middle Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="middleName" id="middleName" value={user.middleName} onChange={(e) =>setUser({...user, middleName: e.target.value}) } />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='lastName' >Last Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="lastName" id="lastName" required value={user.lastName} onChange={(e) =>setUser({...user, lastName: e.target.value}) }/>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="date" name="dob" id="dob" required value={user.dateOfBirth} onChange={(e) =>setUser({...user, dateOfBirth: e.target.value}) }/>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="address">Address:</label>
                    <textarea className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} name="address" id="address" required value={user.address} onChange={(e) =>setUser({...user, address: e.target.value}) } />
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