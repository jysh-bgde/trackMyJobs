import React from 'react'

const RegisterForm = () => {
  return (
   <div className='flex justify-center items-center'>
    <div className='bg-white my-3 p-3 border-2 rounded-md'>
        <form >

          

            <div className='p-3 flex justify-between'>
                <label htmlFor="userName">UserName:</label>
                <input className='border-2 rounded-md mx-3' type="text" name='userName' id='userName'/>
            </div>

            <div className='p-3 flex justify-between'>
                <label htmlFor="email">Email:</label>
                <input className='border-2 rounded-md mx-3' type="email" name='email' id='email'/>
            </div>

            <div className='p-3 flex justify-between'>
                <label htmlFor="password">Password:</label>
                <input className='border-2 rounded-md mx-3' type="password" name='password' id="password" />
            </div>

            <div className='p-3 flex justify-between'>
                <label htmlFor="rePassword">Re-enter password:</label>
                <input className='border-2 rounded-md mx-3' type="password" name='rePassword'  id='rePassword'/>
            </div>
                <button  className='bg-green-500 px-3 py-1 mx-3 font-semibold rounded text-white' type='submit' >Register</button>
        </form>
    </div>
   </div>
  )
}

export default RegisterForm