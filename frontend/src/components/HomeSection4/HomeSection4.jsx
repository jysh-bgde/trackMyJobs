import React from 'react'

const HomeSection4 = () => {
  return (
    <section className='bg-white mx-2 my-10 p-2 rounded-md dark:bg-gray-800 '>
        <h1 className='text-4xl font-extrabold tracking-tight leading-none p-2 text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center'>Features</h1>

        <div className='grid grid-flow-row sm:flex sm:flex-wrap gap-2'>
        
        <div className="flex flex-col flex-1 border-2 dark:border-gray-600 rounded-md justify-around items-center dark:text-white">
        <img src="track.png" alt="track jobs icon" />
        <span>Track Jobs</span>
        </div>

        <div className="flex flex-col flex-1 border-2 dark:border-gray-600 rounded-md justify-around items-center dark:text-white" >
        <img src="fileUpload.png" alt="resume upload icon" />
        <span>Upload Resume</span>
        </div>

        <div className="flex flex-col flex-1 border-2 dark:border-gray-600 rounded-md justify-around items-center dark:text-white" >
        <img src="writeReviews.png" alt="write reviews icon" />
        <span>Company Reviews</span>
        </div>

        <div className="flex flex-col flex-1 border-2 dark:border-gray-600 rounded-md justify-around items-center dark:text-white" >
        <img src="salary.png" alt="salary icon" />
        <span>Company Salary</span>
        </div>

        <div className="flex flex-col flex-1 border-2 dark:border-gray-600 rounded-md justify-around items-center dark:text-white" >
        <img src="interview.png" alt="interview icon" />
        <span>Interview Process</span>
        </div>

        <div className="flex flex-col flex-1 border-2 dark:border-gray-600 rounded-md justify-around items-center dark:text-white" >
        <img src="resume.png" alt="resume builder" />
        <span>Resume Builder</span>
        </div>
        

        </div>
    </section>
  )
}

export default HomeSection4