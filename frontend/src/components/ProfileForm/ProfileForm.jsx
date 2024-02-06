import React, { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'

const ProfileForm = () => {
    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)

    const {user, setUser} = useContext(UserContext)
    console.log(user)
    return (
        <div className='flex justify-center items-center'>
            <div  className=' bg-white my-3 p-3 border-2 rounded-md'>
            <form >
                <div className='p-3 flex justify-between items-center'>
                    <img className='border-2 rounded-md mx-3' src="displayPictureSample.png" alt="display picture" height={128} width={128}/>
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='firstName' >First Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="firstName" id="firstName" required />
                </div>

                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='middleName'>Middle Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="middleName" id="middleName" />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor='lastName' >Last Name:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="lastName" id="lastName" required />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="date" name="dob" id="dob" required />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="addressLine1">Address Line 1</label>
                    <textarea className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} name="addressLine1" id="addressLine1" required />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <textarea className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} name="addressLine2" id="addressLine2" required />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="city">City</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="city" id="city" required />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="state">State</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="state" id="state" required />
                </div>
                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="country">Country</label>
                    <input className='border-2 rounded-md mx-3' disabled={!isEditButtonClicked} type="text" name="country" id="country" required />
                </div>

                {isEditButtonClicked ? (<button 
                className='bg-green-500 self-end px-3 rounded-md ' type='button' onClick={() => { setIsEditButtonClicked(!isEditButtonClicked) }}> Save </button>) : (<button 
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