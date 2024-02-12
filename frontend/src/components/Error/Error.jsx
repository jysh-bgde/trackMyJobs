import React from 'react'
import {Card} from "flowbite-react"
const Error = () => {
  return (
    <div className='flex justify-center items-center'>
        <div>
            <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       ERROR:
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Something went wrong
      </p>
            </Card>
        </div>
    </div>
  )
}

export default Error