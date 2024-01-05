import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex flex-row justify-around text-lg items-center'>
    <div>
        <a href='#'><img src='vite.svg' alt='Track My Job Logog'></img></a>
    </div>
    <div className='flex flex-row gap-3'>
        <div className='flex flex-row'>
            <ul className='flex flex-row gap-2'>
                <li className='text-green-500 font-semibold'><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </div>
        <div className='flex flex-row gap-2'>
            <button type="button" className=' px-3 border-green-500 border-solid border-2 font-semibold rounded' >Login</button>
            <button type="button" className='bg-green-500 px-3 font-semibold rounded text-white'>Register</button>
        </div>
    </div>
   </nav>
  )
}

export default Navbar