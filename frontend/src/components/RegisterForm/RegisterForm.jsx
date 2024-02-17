import React from 'react'
import { useState } from 'react'
import { Alert, Button, Card, Label, Modal, TextInput } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import PopUp from '../PopUp/PopUp';


const RegisterForm = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reEnterPassword, setReEnterPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
   // const [fullName, setFullName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [showModal, setShowModal] = useState(false)
    //const [modalHeaderMessage, setModalHeaderMessage] = useState("")
    const [modalBodyMessage, setModalBodyMessage] = useState("")

    //const route = useroute
const navigate = useNavigate()

    async function  handleSubmit(e){
        e.preventDefault();
        
        //check if password and re-enter password both are same or not
        //if they are not same, show model password not same 
        if(password!==reEnterPassword)
        {   
           return
        }

        //console.log(userName, email, password, firstName, lastName, dob)

        //if same then check if user already exists
        const response = await axios.post("/api/v1/users/register",{
            userName,
            email,
            password,
            firstName,
            lastName,
            dateOfBirth,
          })
          setModalBodyMessage(response.data.message)
        setShowModal(!showModal)   


           
           // route to login page
        if(response.data.success)
        {
            return navigate("/login");
        }
    }

  return (
   <div className='flex justify-center items-center'>
    <Card>
        {showModal ? (<PopUp showModal ={showModal} bodyMessage={modalBodyMessage} setShowModal = {setShowModal}/>):( <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
            <div className='p-3 flex flex-wrap justify-around items-center'>
                <Label className="flex-1" htmlFor="firstName">First Name:</Label>
                <TextInput className='sm:flex-1' type="text" name='firstName' value={firstName} id='firstName' onChange={(e) => setFirstName(e.target.value)} required/>
            </div>

            <div className='p-3 flex flex-wrap justify-around items-center'>
                <Label className="flex-1" htmlFor="lastName">Last Name:</Label>
                <TextInput className='sm:flex-1' type="text" name='lastName' value={lastName} id='lastName' onChange={(e) => setLastName(e.target.value)} required/>
            </div>

            <div className='p-3 flex flex-wrap justify-around items-center'>
                <Label className="flex-1" htmlFor="dateOfBirth">Date of Birth:</Label>
                <TextInput className='sm:flex-1' type="date" name='dateOfBirth' value={dateOfBirth} id='dob' onChange={(e) => setDateOfBirth(e.target.value)} required/>
            </div>

            <div className='p-3 flex flex-wrap justify-around items-center'>
                <Label className="flex-1" htmlFor="userName">UserName:</Label>
                <TextInput className='sm:flex-1' type="text" name='userName' value={userName} id='userName' onChange={(e) => setUserName(e.target.value)} required/>
            </div>

            <div className='p-3 flex flex-wrap justify-around items-center'>
                <Label className="flex-1" htmlFor="email">Email:</Label>
                <TextInput className='sm:flex-1' type="email" name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            </div>

            <div className='p-3 flex flex-wrap justify-between items-center'>
                <Label className="flex-1" htmlFor="password">Password:</Label>
                <TextInput type="password" className='sm:flex-1' name='password' id="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            </div>

            <div className='p-3 flex flex-wrap justify-between items-center'>
                <Label htmlFor="rePassword" className='flex-1'>Re-enter password:</Label>

                <TextInput  className='sm:flex-1' type="password" name='rePassword'  id='rePassword' value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)} required/>
                <div>
                {password!==reEnterPassword ? (<Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Passwords do not match!</span> 
    </Alert>) : ("")}
                </div>
            </div>
                <Button color='success'  className='px-3 py-1 mx-3' type='submit' >Register</Button>
        </form>) }
       
    </Card>
   </div>
  )
}

export default RegisterForm