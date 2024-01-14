import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    const isAuthenticated = false;
  return (
   <nav className='flex flex-row justify-around text-lg items-center bg-white'>
    <div>
        <NavLink to='/'><img src='vite.svg' alt='Track My Job Logog'></img></NavLink>
    </div>
    <div className='flex flex-row gap-3'>
        <div className='flex flex-row'>
            <ul className='flex flex-row gap-2'>
                <li ><NavLink className={({isActive}) => `${isActive ? "text-green-500" : ""}` } to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => `${isActive ? "text-green-500" : ""}` }  to="about">About</NavLink></li>
                <li><NavLink className={({isActive}) => `${isActive ? "text-green-500" : ""}` }  to="blogs">Blogs</NavLink></li>
                <li><NavLink className={({isActive}) => `${isActive ? "text-green-500" : ""}` }  to="contact">Contact</NavLink></li>
            </ul>
        </div>
        {isAuthenticated ? (<>
        <div className='flex flex-row gap-2'>
            <NavLink to='profile' >Profile</NavLink>
            <button type="button" className='bg-green-500 px-3 font-semibold rounded text-white'>Logout</button>
        </div></>):(<>
            <div className='flex flex-row gap-2'>
            <NavLink to="/login" className=' px-3 border-green-500 border-solid border-2 font-semibold rounded' >Login</NavLink>
            <NavLink to="/register" className='bg-green-500 px-3 font-semibold rounded text-white'>Register</NavLink>
        </div>
        </>)}
        
    </div>
   </nav>
  )
}

export default Navbar