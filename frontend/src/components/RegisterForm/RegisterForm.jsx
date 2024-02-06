import React from 'react'
import { useState } from 'react'
import { Alert, Button, Modal } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import { redirect, useNavigate } from "react-router-dom";
import PopUp from '../PopUp/PopUp';

// function PopUp({showModal, setShowModal, bodyMessage}){

   
//     return  <>
  
//     <Modal dismissible show={showModal} onClose={() => setShowModal(false)}>
//       <Modal.Header>Message:</Modal.Header>
//       <Modal.Body>
//         <div className="space-y-6">
//           <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//          {bodyMessage}
//           </p>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={() => setShowModal(false)}>OK</Button>
//       </Modal.Footer>
//     </Modal>
//   </>
// }

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
    <div className='bg-white my-3 p-3 border-2 rounded-md'>
        {showModal ? (<PopUp showModal ={showModal} bodyMessage={modalBodyMessage} setShowModal = {setShowModal}/>):( <form >
            <div className='p-3 flex items-center justify-between'>
                <label htmlFor="firstName">First Name:</label>
                <input className='border-2 rounded-md mx-3' type="text" name='firstName' value={firstName} id='firstName' onChange={(e) => setFirstName(e.target.value)}/>
            </div>

            <div className='p-3 flex items-center justify-between'>
                <label htmlFor="lastName">Last Name:</label>
                <input className='border-2 rounded-md mx-3' type="text" name='lastName' value={lastName} id='lastName' onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <div className='p-3 flex items-center justify-between'>
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input className='border-2 rounded-md mx-3' type="date" name='dateOfBirth' value={dateOfBirth} id='dob' onChange={(e) => setDateOfBirth(e.target.value)}/>
            </div>

            <div className='p-3 flex  items-center justify-between'>
                <label htmlFor="userName">UserName:</label>
                <input className='border-2 rounded-md mx-3' type="text" name='userName' value={userName} id='userName' onChange={(e) => setUserName(e.target.value)}/>
            </div>

            <div className='p-3 flex  items-center justify-between'>
                <label htmlFor="email">Email:</label>
                <input className='border-2 rounded-md mx-3' type="email" name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className='p-3 flex  items-center justify-between'>
                <label htmlFor="password">Password:</label>
                <input className='border-2 rounded-md mx-3' type="password" name='password' id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <div className='p-3 flex justify-between  items-center'>
                <label htmlFor="rePassword">Re-enter password:</label>
                <div>

                <input className='border-2 rounded-md mx-3 my-2' type="password" name='rePassword'  id='rePassword' value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)}/>
                {password!==reEnterPassword ? (<Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Passwords do not match!</span> 
    </Alert>) : ("")}
                </div>
            </div>
                <button  className='bg-green-500 px-3 py-1 mx-3 font-semibold rounded text-white' type='submit' onClick={handleSubmit}>Register</button>
        </form>) }
       
    </div>
   </div>
  )
}

export default RegisterForm