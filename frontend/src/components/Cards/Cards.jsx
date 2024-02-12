import React from 'react'
import FreeCard from '../FreeCard/FreeCard'
import PremiumCard from '../PremiumCard/PremiumCard'
import { Button, Card, TextInput } from 'flowbite-react'

const Cards = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <div className='flex justify-stretch items-center gap-3 p-2 flex-wrap w-full'>
      <FreeCard/>
      <PremiumCard/>
    </div>

    <Card className='bg-white p-3 border-2 rounded-md my-2 flex items-center'>
    
      <label htmlFor="premium" className='mx-2'>Enter email if interested in premium</label>
      <TextInput id="premium" name='premium' type="email" placeholder="name@example.com" className='mx-2'/>
      <Button color="success" className='mx-2'>Success</Button>
    </Card>

  </div>
  </>
  )
}

export default Cards