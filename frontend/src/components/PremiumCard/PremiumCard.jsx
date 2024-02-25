import { Button, Card, Label, TextInput } from 'flowbite-react'
import React from 'react'

const PremiumCard = () => {
  return (
   
    <Card className='flex-1 h-full'>
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium plan</h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">$</span>
      <span className="text-5xl font-extrabold tracking-tight">5</span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul className="my-1 space-y-5">
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"
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
          className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"
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
        Upload resume 
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"
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
          className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"
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
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Salaries of job in company</span>
      </li>
      <li className="flex space-x-3 decoration-gray-500">
      <svg
          className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"
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
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Interview questions of job in company</span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
      <svg
          className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"
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
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Resume builder</span>
      </li>
     
    </ul>
    <div className='bg-white dark:bg-gray-800'>
      
      <form action="https://api.web3forms.com/submit" method="post">
              
              <input type="hidden" name="access_key" value="d2718fbf-a525-490a-8439-badbc4a2951e"/>
              <input type="hidden" name="subject" value="New premium submission "/>
              <input type="hidden" name="redirect" value="https://web3forms.com/success?title=Added%20to%20premium%20waitlist&desc=Thank%20you!You%20have%20been%20added%20to%20premium%20wait%20list"/>
              <input type="hidden" name="from_name" value="Track My Jobs"></input>
              <input type="checkbox" name="botcheck" id="" className='hidden' style={{display: 'none'}}/>
      {/* <Label htmlFor="premium" className=''>Enter email if interested in premium</Label> */}
      <TextInput id="premium" name='premium' type="email" placeholder="Enter email if interested in premium" className='mb-1' required autoComplete='off'/>
      <Button color="success" className='w-full' type='submit'>Submit</Button>
      </form>
    </div>
  </Card>
  )
}

export default PremiumCard