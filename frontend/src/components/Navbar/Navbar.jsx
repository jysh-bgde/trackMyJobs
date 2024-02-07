import React, { useContext, useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import UserContext from '../../context/UserContext'

const Navbar = () => {
    
    //console.log(user)
    
   const [isAuthenticated, setIsAuthenticated] = useState(false)

  

    const {user} = useContext(UserContext)
    useEffect(() => {
        //console.log(user)
        if(user)
    {
       setIsAuthenticated(true)
    }
    else
    {
        setIsAuthenticated(false)
    }
    
     
    }, [user])
    
  return (
   <nav className='flex flex-1 flex-row justify-around text-lg items-center bg-white'>
    <div>
        <NavLink to='/'><span className='text-2xl'>Track my Job</span></NavLink>
    </div>
    <div className='flex flex-row gap-3'>
        <div className='flex flex-row'>
            <ul className='flex flex-row gap-2'>
                <li ><NavLink className={({isActive}) => `${isActive ? "text-green-600 font-semibold" : "hover:text-green-500"}` } to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => `${isActive ? "text-green-600 font-semibold" : "hover:text-green-500"}` }  to="about">About</NavLink></li>
                <li><NavLink className={({isActive}) => `${isActive ? "text-green-600 font-semibold" : "hover:text-green-500"}` }  to="blogs">Blogs</NavLink></li>
                <li><NavLink className={({isActive}) => `${isActive ? "text-green-600 font-semibold" : "hover:text-green-500"}` }  to="contact">Contact</NavLink></li>
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