import React from 'react'
import { useState } from 'react'
import { Alert, Button, Modal } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import { redirect } from "react-router-dom";

const RegisterForm = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reEnterPassword, setReEnterPassword] = useState("")

    const route = useroute

    async function  handleSubmit(e){
        e.preventDefault();
        
        //check if password and re-enter password both are same or not
        //if they are not same, show model password not same 
        if(password!==reEnterPassword)
        {   
           return
        }

        //if same then check if user already exists
            const response = await axios.post("/api/v1/users/register",{
                userName,
                email,
                password
            })

            window.alert(response.data.message)
                
        if(response.data.success)
        {
            return redirect("/login");
        }
        // route to login page
    }

  return (
   <div className='flex justify-center items-center'>
    <div className='bg-white my-3 p-3 border-2 rounded-md'>
        <form >
            <div className='p-3 flex justify-between'>
                <label htmlFor="userName">UserName:</label>
                <input className='border-2 rounded-md mx-3' type="text" name='userName' value={userName} id='userName' onChange={(e) => setUserName(e.target.value)}/>
            </div>

            <div className='p-3 flex justify-between'>
                <label htmlFor="email">Email:</label>
                <input className='border-2 rounded-md mx-3' type="email" name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className='p-3 flex justify-between'>
                <label htmlFor="password">Password:</label>
                <input className='border-2 rounded-md mx-3' type="password" name='password' id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <div className='p-3 flex justify-between'>
                <label htmlFor="rePassword">Re-enter password:</label>
                <div>

                <input className='border-2 rounded-md mx-3 my-2' type="password" name='rePassword'  id='rePassword' value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)}/>
                {password!==reEnterPassword ? (<Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Passwords do not match!</span> 
    </Alert>) : ("")}
                </div>
            </div>
                <button  className='bg-green-500 px-3 py-1 mx-3 font-semibold rounded text-white' type='submit' onClick={handleSubmit}>Register</button>
        </form>
    </div>
   </div>
  )
}

export default RegisterForm