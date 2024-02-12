import React, { useContext, useEffect, useState} from 'react'
import UserContext from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'
const Dashboard = () => {

    const {user} = useContext(UserContext)
    
    const navigate = useNavigate()        
    //create state isAuthenticated to  check if user is authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        //if aythenticated display component else error component
        if(user)
        {
            setIsAuthenticated(true)
        }
        else
        {
            setIsAuthenticated(false)
            navigate("/error")
        }
    
     
    }, [isAuthenticated, user])
    

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
    <div className='flex justify-between items-start'>
        
    <div className='flex flex-col justify-center items-center w-full mx-3'>
       { dummyJobsData.map((job) => (
        <div key = {job.id} className={`p-3 w-full my-3 ${job.jobStatus==0 ? ("bg-white") :(job.jobStatus==-1?("bg-red-200"):(job.jobStatus==1 ? ("bg-yellow-200"):("bg-green-200")))}  border-2 rounded-md`} >
            <div className={`flex justify-between items-center border-b-2 ${job.jobStatus==0 ? ("border-gray-500") :(job.jobStatus==-1?("border-red-500"):(job.jobStatus==1 ? ("border-yellow-500"):("border-green-500")))}`}>
                <div>
            <h1 className='text-3xl'>{job.jobTitle}</h1>
            <h2 className='text-2xl'>{job.company}</h2>
                </div>
            <div>
            <button type='button' className='border-2 bg-white text-green-800 font-medium rounded-md px-3 mx-3'>Edit</button>
            <button type='button' className='border-2 bg-red-500 text-white rounded-md px-3 font-medium mx-3'>Delete</button>
            </div>
            </div>
            <p><b>Job Status :</b> {job.jobStatus==0 ? ("Applied") :(job.jobStatus==-1?("Rejected"):(job.jobStatus==1 ? ("Ongoing"):("Accepted")))}</p>
           <p> <a href={job.companyWebsite} ><b>Company Website :</b> {job.companyWebsite}</a></p>
            
            <p><b>Applied on Date : </b>{job.appliedOnDate}</p>
            <p><b>applied where?: </b> {job.appliedWhere}</p>
            <p><b>Job Salary:</b>{job.jobSalary}</p>
            <p><b>Job Minimum Experience: </b>{job.jobMinimumExperience}</p>
            <p><b>Job Work Location: </b>{job.jobWorkLocation}</p>

        </div>
       ))}
    </div>
        <Button color='success' className='m-3 p-3 font-semibold'>

    <Link to='/addJob' >Add Job</Link>
        </Button>
       </div>
  )
}

export default Dashboard