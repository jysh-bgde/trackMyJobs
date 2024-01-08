import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col border-2 rounded-md p-3 bg-white my-3'>
            <form>
                <div className='p-3'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' id='email' />
                </div>

                <div className='p-3'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' id='password' />
                </div>

                <div className='p-3 '>

                <button type='submit' className='bg-green-500 px-3 rounded-md'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm