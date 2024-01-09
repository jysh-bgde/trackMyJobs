import React from 'react'

const PremiumCard = () => {
  return (
    <div className='bg-white p-3 my-3 border-2 border-solid rounded-md'>
        <div className=' border-b-2 flex flex-col items-center'>
            <h1 className='text-3xl'>₹150/month</h1>
            <h2 className='text-2xl'>Premium</h2>
        </div>
        <div>
            <div>
            <ul>
                <li><img src="check.svg" alt="" className='inline' />Keep Track of Jobs</li>
                <li><img src="check.svg" alt="" className='inline' />Upload resume for each job profile </li>
                <li><img src="check.svg" alt="" className='inline' />Reviews of company</li>
                <li><img src="check.svg" alt="" className='inline' />Salaries of job in company</li>
                <li><img src="check.svg" alt="" className='inline' />Interview questions of job in company</li>
                <li><img src="check.svg" alt="" className='inline' />Resume builder</li>
                
            </ul>

            </div>
            
        </div>
    </div>
  )
}

export default PremiumCard