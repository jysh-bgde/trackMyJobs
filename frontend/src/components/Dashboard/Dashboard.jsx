import React from 'react'

const Dashboard = () => {

    const dummyJobsData = [
        {
            id: 1,
            jobTitle: "SWE",
            company: "Meta",
            jobStatus: 2,
            companyWebsite:"www.meta.com",
            appliedOnDate: "12/12/2023",
            appliedWhere: "linkedIn",
            jobSalary: 1500000,
            jobMinimumExperience: 2,
            jobWorkLocation: "US",
        },
        {
            id: 2,
            jobTitle: "frontend developer",
            company: "Amazon",
            jobStatus: 1,
            companyWebsite:"www.amazon.com",
            appliedOnDate: "13/12/2023",
            appliedWhere: "company website",
            jobSalary: 1600000,
            jobMinimumExperience: 3,
            jobWorkLocation:"Bangalore",
        },
        {
            id: 3,
            jobTitle: ".Net developer",
            company: "Apple",
            jobStatus: -1,
            companyWebsite:"www.apple.com",
            appliedOnDate: "14/12/2023",
            appliedWhere: "Naukri",
            jobSalary: 1400000,
            jobMinimumExperience: 2,
            jobWorkLocation:"California",
        },
        {
            id: 4,
            jobTitle: "Backend developer",
            company: "Netflix",
            jobStatus: -1,
            companyWebsite:"www.netflix.com",
            appliedOnDate: "15/12/2023",
            appliedWhere: "company website",
            jobSalary: 1500000,
            jobMinimumExperience: 3,
            jobWorkLocation: "Mumbai",
        },
        {
            id: 5,
            jobTitle: "ML developer",
            company: "Google",
            jobStatus: 0,
            companyWebsite:"www.google.com",
            appliedOnDate: "12/12/2023",
            appliedWhere: "company website",
            jobSalary: 2000000,
            jobMinimumExperience: 5,
            jobWorkLocation: "Gurugram",
        }
    ]

  return (
    <div className='flex flex-col justify-center items-center'>
       { dummyJobsData.map((job) => (
        <div key = {job.id} className={`p-3 my-3 ${job.jobStatus==0 ? ("bg-white") :(job.jobStatus==-1?("bg-red-400"):(job.jobStatus==1 ? ("bg-yellow-400"):("bg-green-400")))}  border-2 rounded-md`} >
            <h1 className='text-3xl'>{job.jobTitle}</h1>
            <h2 className='text-2xl border-b-2 border-green-500'>{job.company}</h2>
            <p><b>Job Status :</b> {job.jobStatus}</p>
            <p><b>Company Website :</b> {job.companyWebsite}</p>
            <p><b>Applied on Date : </b>{job.appliedOnDate}</p>
            <p><b>applied where?: </b> {job.appliedWhere}</p>
            <p><b>Job Salary:</b>{job.jobSalary}</p>
            <p><b>Job Minimum Experience: </b>{job.jobMinimumExperience}</p>
            <p><b>Job Work Location: </b>{job.jobWorkLocation}</p>

        </div>
       ))}
    </div>
  )
}

export default Dashboard