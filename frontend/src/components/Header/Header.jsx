import { Button } from 'flowbite-react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'


const Header = () => {

    const {user} = useContext(UserContext)
    return (
        <section className="bg-white mx-2 my-10 rounded-md dark:bg-gray-800 relative">
        <div className="bg-gradient-to-b from-green-100 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0 rounded-md"></div>
    <div className="py-8 px-4 text-center lg:py-16 relative">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Never let a job application slip through the cracks.</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">TrackMyJobs keeps your applications organized and helps you land your dream job.</p>
        <div className="flex justify-center gap-1">
        {
            user ? ("") :(
            <>
            <Button className='mx-2' color="success"> <Link to="/login" >Login</Link></Button>
        <Button outline color='success'><Link to="/register" >Register</Link></Button>
            </>)
        }
        
        </div>
    </div>
</section>
  )
}

export default Header