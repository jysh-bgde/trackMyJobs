import React from 'react'

const HomeSection3 = () => {
  return (
    <div>
    <section className="bg-white mx-2 my-10 rounded-md dark:bg-gray-800 relative flex flex-wrap justify-center items-center">


    <div className='flex-1'>
        <img src="trackMyJobsHomePicLight2.jpg" alt=" track my jobs home section 2 image" className='w-full h-full dark:border-gray-100 rounded-md'  />
    </div>

       <div className="sm:bg-gradient-to-l from-green-100 to-transparent dark:from-green-900 sm:w-1/4 w-full h-full absolute top-0 right-0 z-0 rounded-md"></div>

    <div className="py-8 px-4 lg:py-16 relative">
        
        <div className='flex-1'>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> <span className='text-green-500'>Track </span>jobs</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl w-full dark:text-gray-200">Change status of jobs</p>
        </div>
        
    </div>

       

        </section>
        <div className="sm:bg-gradient-to-l from-green-100 to-transparent dark:from-green-900 sm:w-1/2 w-full h-full  z-0 rounded-md"></div>
    </div>
  )
}

export default HomeSection3