import { Card } from 'flowbite-react'
import React from 'react'

const PremiumCard = () => {
  return (
   
    <Card className='flex-1'>
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium plan</h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">$</span>
      <span className="text-5xl font-extrabold tracking-tight">5</span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul className="my-7 space-y-5">
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Keep Track of Jobs</span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
        Upload one resume 
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Reviews of company</span>
      </li>
      <li className="flex space-x-3 decoration-gray-500">
      <svg
          className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
           <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">Salaries of job in company</span>
      </li>
      <li className="flex space-x-3 decoration-gray-500">
      <svg
          className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">Interview questions of job in company</span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
      <svg
          className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">Resume builder</span>
      </li>
     
    </ul>
    
  </Card>
  )
}

export default PremiumCard