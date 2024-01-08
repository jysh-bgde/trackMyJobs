import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col '>
      <div className='bg-white flex justify-evenly'>
        <div >
          <a href="#"><img src="vite.svg" alt="Track My Job" /></a>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <a href='#'>About</a>
            <a href='#'>Blogs</a>
            <a href='#'>Contact</a>
            
            </div> 
          <div className='flex flex-col'>
            <label htmlFor='emailFooter'>Subscribe to know latest updates:</label>
            <div >
            <input className='border-2 border-slate-100' type="email" name="emailFooter" id="emailFooter" />
            <button type='button' className='bg-green-500 px-3 rounded-md'>Subscribe</button>

            </div>
            </div>

        </div>
      </div>
      <div className='border-2 flex items-center justify-center border-slate-100 bg-white '>
        <span>All rights reserved © 2024 Track My Job</span>
      </div>
    </div>
  )
}

export default Footer