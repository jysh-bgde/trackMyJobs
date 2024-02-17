import { Button, ButtonGroup, DarkThemeToggle, Navbar } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import UserContext from '../../context/UserContext'


function Navbar2() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const {user, setUser} = useContext(UserContext) 
    const navigate = useNavigate()
     useEffect(() => {
         if(user)
     {
        setIsAuthenticated(true)
     }
     else
     {
         setIsAuthenticated(false)
     }
     
      
     }, [user])
 
     function handleLogout()
     {
         sessionStorage.removeItem("user")
         setUser(null)
         navigate("/")
         
     }



  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/" >
        <img src="tmjLogoBgWhite.png" className="mr-3 h-6 sm:h-9 object-cover" alt="Track My Job Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Track My Jobs</span>
      </Navbar.Brand>
     
      {isAuthenticated ? ( <div className='flex items-center md:order-2'>
      <DarkThemeToggle/>
            <NavLink to='profile' className="mx-2 hover:text-green-600 font-semibold dark:text-white" >Profile</NavLink>
            <Button onClick={handleLogout} color="success" type="button" >Logout</Button>
            <Navbar.Toggle />
        </div>) : ( <div className="flex md:order-2">
        <DarkThemeToggle/>
        <Button className='mx-2' color="success"> <NavLink to="/login" >Login</NavLink></Button>
        <Button outline color='success'><NavLink to="/register" >Register</NavLink></Button>
        <Navbar.Toggle />
      </div>) }
      
      <Navbar.Collapse>
        <NavLink to="/" className="hover:text-green-600 font-semibold dark:text-white">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-green-600  dark:text-white">About</NavLink>
        <NavLink to="/blogs" className="hover:text-green-600  dark:text-white">Blogs</NavLink>
        <NavLink to="/contact" className="hover:text-green-600  dark:text-white">Contact</NavLink>
        {isAuthenticated ? ( <NavLink to="/dashboard" className="hover:text-green-600 font-semibold dark:text-white">Dashboard</NavLink>) : ("")}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar2