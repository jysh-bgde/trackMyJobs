import React from 'react'
import { Accordion } from 'flowbite-react';

const FAQs = () => {
  return (
    <div className='bg-white mx-2 my-10 p-2 rounded-md dark:bg-gray-800 '>
      <h1 className='text-4xl font-extrabold tracking-tight leading-none p-2 text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center'>Frequently Asked Questions</h1>
    <Accordion>

    <Accordion.Panel>
      <Accordion.Title >What is Track My Jobs?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Track My Jobs is a platform that helps you organize and manage your job search efficiently. It allows you to track applications, stay on top of deadlines, and increase your chances of landing your dream job.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>Who is Track My Jobs for?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Track My Jobs is for anyone actively looking for a job, regardless of their experience level or industry. It's perfect for students, recent graduates, career changers, and seasoned professionals alike. 
        </p>
       
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>Who is Track My Jobs NOT for?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Track My Jobs is NOT a job board. We can only help keeping track of your applications across various other job boards.
        </p>
       
      </Accordion.Content>
    </Accordion.Panel>

    

    <Accordion.Panel>
      <Accordion.Title>Is my data safe with Track My Jobs?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Yes, your data is safe with us. We use industry-standard security measures to protect your information.
        </p>
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>What are the different pricing plans?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        We offer a free plan with basic features. We are coming with premium plans with various features in future.
        </p>
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>Do I need to download any software?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        No, Track My Jobs is a web-based platform, so you can access it from any device with an internet connection.
        </p>
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>How can I contact support?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        You can reach our support team by email or social links. Contact information is available on our website. Social links are available at the bottom of website.
        </p>
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>What are your future plans for Track My Jobs?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        We are constantly working on adding new features and improvements to make your job search even easier. Subscribe us for all new updates and features.
        </p>
      </Accordion.Content>
    </Accordion.Panel>



  </Accordion>
    </div>
  )
}

export default FAQs