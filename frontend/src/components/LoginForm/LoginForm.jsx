import React, { useState , useContext} from 'react'
import PopUp from '../PopUp/PopUp'
import {redirect, useNavigate} from "react-router-dom"
import axios from 'axios'
import UserContext from '../../context/UserContext'



const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [modalBodyMessage, setModalBodyMessage] = useState("")

    const navigate = useNavigate()

    const {setUser} = useContext(UserContext)

    async function handleLogin(e)
    {   e.preventDefault()
        //check if email or password is correct
        if(!email || !password)
        {   
            setModalBodyMessage("Email and password is required to login")
            setShowModal(!showModal)   
            return;
        }
       const response = await axios.post("/api/v1/users/login",{
           email,
           password
        })

        
        setModalBodyMessage(response.data.message)
        // setShowModal(!showModal)   
        
        //if incorrect show modal for incorrect password or email

        if(response.data.success==true)
        {   
            //redirect not working, use useNavigate 
            const user = response.data.data.user
            //store in session storage so that user data is saved even on refresh
            sessionStorage.setItem("user", JSON.stringify(user))
            setUser(user)
            
            
           return navigate("/dashboard")
        }
        //if correct show dashboard
    }

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col border-2 rounded-md p-3  bg-white my-3'>
            {showModal ? (<PopUp showModal ={showModal} bodyMessage={modalBodyMessage} setShowModal = {setShowModal}/>) : (<form enctype="multipart/form-data">
                <div className='p-3 flex justify-between items-center '>
                    <label htmlFor="email">Email:</label>
                    <input className='border-2 rounded-md mx-3' type="email" value = {email} name='email' id='email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className='p-3 flex justify-between items-center'>
                    <label htmlFor="password">Password:</label>
                    <input className='border-2 rounded-md mx-3' type="password" name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>

                <div className='p-3 '>

                <button type='submit' className='bg-green-500 px-3 py-1 font-semibold rounded text-white' onClick={handleLogin}>Login</button>
                </div>
            </form>)}
            
        </div>
    </div>
  )
}

export default LoginForm