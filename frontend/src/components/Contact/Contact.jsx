import React from 'react'

const Contact = () => {

    const isAuthenticated = false;
  return (
    <div className='flex justify-center items-center'>
        <div className='border-2 rounded-md p-3'>
            <form>
                {isAuthenticated ? (<></>) : (<div className='flex justify-center items-center' >

                <label htmlFor="email">Enter your email here:</label>
                <input className='border-2 rounded-md mx-3' type='email' name="email" id="email"/>
                </div>)}
                
                <div className='flex flex-col'>
                <label htmlFor="message">Enter your message here:</label>
                <textarea className='border-2 rounded-md my-3' name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                
                <div>
                    <button className='bg-green-500 px-3 rounded-md' >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact