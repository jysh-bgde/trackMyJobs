import React, { useContext, useEffect, useState} from 'react'
import UserContext from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card } from 'flowbite-react'
import axios from 'axios'
import Paginate from '../Paginate/Paginate'
const Dashboard = () => {

    const {user, setUser} = useContext(UserContext)
    
    const navigate = useNavigate()        
    //create state isAuthenticated to  check if user is authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [jobs, setJobs] = useState([])
    

    useEffect(() => {
        //if aythenticated display component else error component
        if(user)
        {
            setIsAuthenticated(true)
           async function getAllJobs(){

                //call backend to get jobs using axios
                const response  = await axios.get('/api/v1/users/jobs')
                //console.log(response.data.data)
                //set and display jobs
                    console.log(response)
                if(response.data.success)
                {
                    setJobs(response.data.data)
                }
                else{
                    navigate("/error")
                }
                //if error show error
            }
            getAllJobs();

        }
        else
        {
            setIsAuthenticated(false)
            navigate("/error")
        }
    
     
    }, [isAuthenticated, user])
    
    async function handleDeleteJob(e, jobId )
    {   
        //call backend to delete job using axios
        
        const response = await axios.post("/api/v1/users/delete-job", {jobId})
        console.log(response)
        //if response is okay show dashboard
        if(response.data.success)
        {   
            sessionStorage.setItem("user", JSON.stringify(response.data.data))
          
            setUser(response.data.data)
        }
        else
        {
            navigate("/error")
        }
        //if response not ok throw error 
    }

  return (
    <div className='my-2'>
    <div className='flex justify-between items-start'>
        
    <div className='flex flex-col justify-center items-center w-full mx-3'>
       { jobs.map((job) => (
        <Card key = {job._id} className={`p-3 w-full dark:text-white my-3 ${job.jobStatus==0 ? ("bg-white") :(job.jobStatus==-1?("bg-red-200"):(job.jobStatus==1 ? ("bg-yellow-200"):("bg-green-200")))}  border-2 rounded-md`} >
            <div className={`flex flex-wrap justify-between items-center border-b-2 ${job.jobStatus==0 ? ("border-gray-500") :(job.jobStatus==-1?("border-red-500"):(job.jobStatus==1 ? ("border-yellow-500"):("border-green-500")))}`}>
                <div>
            <h1 className='text-3xl font-boldbold'>{job.jobTitle}</h1>
            <h2 className='text-2xl font-semibold'>{job.companyName}</h2>
                </div>
            <div className='flex'>
            <Button type='button' size="sm" color='light' className='font-medium mr-2'><Link to={"/addJob"} state={{ job: job }}>Edit</Link></Button>
            <Button type='button' size="sm" color= 'failure' onClick={(e) => handleDeleteJob(e, job._id)} className='font-medium'>Delete</Button>
            </div>
            </div>
            <p><b>Job Status :</b> {job.jobStatus==0 ? ("Applied") :(job.jobStatus==-1?("Rejected"):(job.jobStatus==1 ? ("Ongoing"):("Accepted")))}</p>
           <p> <a href={job.companyWebsite} target='_blank' rel="noopener noreferrer" ><b>Company Website :</b> {job.companyWebsite}</a></p>
            
            <p><b>Applied on Date : </b>{job.jobAppliedOnDate}</p>
            <p><b>Applied where?: </b> {job.jobAppliedOnWebsite}</p>
            <p><b>Job Salary:</b>{job.jobSalary}</p>
            <p><b>Job Minimum Experience: </b>{job.jobMinimumExperience}</p>
            <p><b>Job Work Location: </b>{job.jobLocation}</p>

        </Card>
       ))}
    </div>
    <div className='flex-1'>
        <Button color='success' className='m-3 font-semibold rounded-full'>

    <Link to='/addJob' >Add Job</Link>
        </Button>
        </div>
       </div>
        {/* <Paginate/> */}
       </div>
  )
}

export default Dashboard