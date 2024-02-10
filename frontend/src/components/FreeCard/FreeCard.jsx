import { Card } from 'flowbite-react'
import React from 'react'

const FreeCard = () => {
  return (
    
    <Card className="max-w-sm my-3">
    
    <div className="font-bold tracking-tight text-gray-900 dark:text-white">
             <h1 className='text-3xl'>₹0/month</h1>
             <h2 className='text-2xl'>Free</h2>
    </div>
    <hr/>
    <div className="font-normal text-gray-700 dark:text-gray-400">
          <ul>
             <li><img src="check.svg" alt="" className='inline' />Keep Track of Jobs</li>
               <li><img src="check.svg" alt="" className='inline' />Upload one resume </li>
               <li><img src="close.svg" alt="" className='inline' />Reviews of company</li>
              <li><img src="close.svg" alt="" className='inline' />Salaries of job in company</li>
              <li><img src="close.svg" alt="" className='inline' />Interview questions of job in company</li>
               <li><img src="close.svg" alt="" className='inline' />Resume builder</li>

            </ul>
       </div>
  </Card>
  )
}

export default FreeCard