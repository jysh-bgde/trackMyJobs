import React from 'react'
import FreeCard from '../FreeCard/FreeCard'
import PremiumCard from '../PremiumCard/PremiumCard'

const Cards = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <div className='flex justify-center items-center gap-3'>
      <FreeCard/>
      <PremiumCard/>

    </div>
    <div className='bg-white p-3 border-2 rounded-md my-2'>
      <label htmlFor="premium">Enter email if interested in premium</label>
      <input type="email" name='premium' id='premium' className='border-2 mx-2' placeholder='Email...' />
      <button type='button' className='bg-green-500 border-2 rounded-md px-3'>Submit</button>
    </div>
  </div>
  </>
  )
}

export default Cards