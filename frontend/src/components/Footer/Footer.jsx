import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <div className='bg-white flex justify-evenly '>
        <div >
          <Link href="/"><span className='text-2xl'>Track my Job</span></Link>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <Link to='/about'>About</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/contact'>Contact</Link>
            
            </div> 
          <div className='flex flex-col'>
            <label htmlFor='emailFooter'>Subscribe to know latest updates:</label>
            <div >
            <input className='border-2 rounded-md px-2' placeholder='Email' type="email" name="emailFooter" id="emailFooter" />
            <button type='button' className='bg-green-500 px-3 py-1 mx-3 font-semibold rounded text-white'  >Subscribe</button>

            </div>
            </div>

        </div>
      </div>
      <div className='border-b-2 flex items-center justify-center border-slate-200 bg-white '>
        <span>All rights reserved © 2024 Track My Job</span>
      </div>
    </div>
  )
}

export default Footer