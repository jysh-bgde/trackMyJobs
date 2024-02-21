import React from 'react'
import FreeCard from '../FreeCard/FreeCard'
import PremiumCard from '../PremiumCard/PremiumCard'
import { Button, Card, Label, TextInput } from 'flowbite-react'
import Header from '../Header/Header'

const Cards = () => {
  return (
    <div>
   
    <div className='flex flex-col justify-center items-center'>
      
    <div className='flex justify-stretch items-center gap-3 p-2 flex-wrap w-full'>
      <FreeCard/>
      <PremiumCard/>
    </div>

    <Card className='bg-white p-3 border-2 rounded-md my-2 flex items-center'>
      
      <form action="https://api.web3forms.com/submit" method="post">
              
              <input type="hidden" name="access_key" value="d2718fbf-a525-490a-8439-badbc4a2951e"/>
              <input type="hidden" name="subject" value="New premium submission "/>
              <input type="hidden" name="redirect" value="https://web3forms.com/success?title=Added%20to%20premium%20waitlist&desc=Thank%20you!You%20have%20been%20added%20to%20premium%20wait%20list"/>
              <input type="hidden" name="from_name" value="Track My Jobs"></input>
              <input type="checkbox" name="botcheck" id="" className='hidden' style={{display: 'none'}}/>
      <Label htmlFor="premium" className='mx-2'>Enter email if interested in premium</Label>
      <TextInput id="premium" name='premium' type="email" placeholder="name@example.com" className='mx-2 w-full' required autoComplete='off'/>
      <Button color="success" className='m-2 w-full' type='submit'>Submit</Button>
      </form>
    </Card>

  </div>
  </div>
  )
}

export default Cards