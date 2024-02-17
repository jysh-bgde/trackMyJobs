import React, { useState , useContext} from 'react'
import PopUp from '../PopUp/PopUp'
import {redirect, useNavigate} from "react-router-dom"
import axios from 'axios'
import UserContext from '../../context/UserContext'
import { Button, Label, TextInput, Card } from 'flowbite-react'



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
    <div className='flex justify-center items-center'>
        <Card>
            {showModal ? (<PopUp showModal ={showModal} bodyMessage={modalBodyMessage} setShowModal = {setShowModal}/>) : (
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleLogin}>
                <div className='p-3 flex flex-wrap justify-around items-center'>
                    <Label  className="flex-1" htmlFor="email">Email:</Label>
                    <TextInput className='sm:flex-1'  type="email" value = {email} name='email' id='email' onChange={(e)=>setEmail(e.target.value)} required/>
                </div>

                <div className='p-3 flex flex-wrap justify-around items-center'>
                    <Label  className="flex-1" htmlFor="password">Password:</Label>
                    <TextInput className='sm:flex-1' type="password" name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                </div>

                <div className='p-3 '>

                <Button type='submit' color='success' >Login</Button>
                </div>
            </form>)}
            
        </Card>
    </div>
  )
}

export default LoginForm