import React, { useState } from 'react'

const ProfileForm = () => {
    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white my-3 p-3 border-2 rounded-md'>
            <form className='flex flex-col items-start'>

                <div>
                    <label htmlFor='firstName' >First Name:</label>
                    <input type="text" name="firstName" id="firstName" required />
                </div>

                <div>
                    <label htmlFor='middleName'>Middle Name:</label>
                    <input type="text" name="middleName" id="middleName" />
                </div>
                <div>
                    <label htmlFor='lastName' >Last Name:</label>
                    <input type="text" name="lastName" id="lastName" required />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" name="dob" id="dob" required />
                </div>
                <div>
                    <label htmlFor="addressLine1">Address Line 1</label>
                    <textarea name="addressLine1" id="addressLine1" required />
                </div>
                <div>
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <textarea name="addressLine2" id="addressLine2" required />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" required />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" id="state" required />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" required />
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