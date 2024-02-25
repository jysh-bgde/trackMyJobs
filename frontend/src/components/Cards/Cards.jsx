import React from 'react'
import FreeCard from '../FreeCard/FreeCard'
import PremiumCard from '../PremiumCard/PremiumCard'
import { Button, Card, Label, TextInput } from 'flowbite-react'
import Header from '../Header/Header'

const Cards = () => {
  return (
    <div>
   
    <div className='flex flex-col justify-center items-center'>
      
    <div className='flex justify-stretch items-center gap-3 p-2 flex-wrap w-full h-full'>
      <FreeCard/>
      <PremiumCard/>
    </div>

    

  </div>
  </div>
  )
}

export default Cards