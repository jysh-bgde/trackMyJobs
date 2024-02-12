import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react'

const Contact = () => {


  return (
    <div className='flex justify-center items-center'>
      <Card className='border-2 rounded-md p-3 bg-white my-3'>
        <form className="flex max-w-md flex-col gap-4">
          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" type="email" placeholder="name@flowbite.com" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Your message" />
            </div>
            <Textarea id="message" placeholder="Your message here..." required rows={10} cols={50} />
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