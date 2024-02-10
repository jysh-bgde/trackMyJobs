import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react'

const Contact = () => {

    const isAuthenticated = false;
  return (
    <div className='flex justify-center items-center'>
        <Card className='border-2 rounded-md p-3 bg-white my-3'>
            <form>
                {isAuthenticated ? (<></>) : (
                <div className='flex justify-center items-center' >

                <Label htmlFor="email" >Enter your email here:</Label>
                <TextInput type='email' name="email" id="email"/>
                </div>)}
                
                <div className='flex flex-col my-2'>
                <Label htmlFor="message">Enter your message here:</Label>
                <Textarea className='border-2 rounded-md my-3' name="message" id="message" cols="30" rows="10"></Textarea>
                </div>
                
                <div>
                <Button color="success" type='submit' >Submit</Button>
                </div>
            </form>
        </Card>
    </div>
  )
}

export default Contact