import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col border-2 rounded-md p-3  bg-white my-3'>
            <form>
                <div className='p-3 flex justify-between'>
                    <label htmlFor="email">Email:</label>
                    <input className='border-2 rounded-md mx-3' type="email" name='email' id='email' />
                </div>

                <div className='p-3 flex justify-between'>
                    <label htmlFor="password">Password:</label>
                    <input className='border-2 rounded-md mx-3' type="password" name='password' id='password' />
                </div>

                <div className='p-3 '>

                <button type='submit' className='bg-green-500 px-3 py-1 font-semibold rounded text-white'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm