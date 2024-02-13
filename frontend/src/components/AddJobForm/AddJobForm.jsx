import { Button, Checkbox, Datepicker, Label, Radio, TextInput } from 'flowbite-react'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const AddJobForm = () => {

    const { user, setUser } = useContext(UserContext)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()
    
    //create state for job object
    
    const [job, setJob] = useState({
        jobTitle: "",
        companyName: "",
        companyWebsite: "",
        jobSalary: "",
        jobMinimumExperience: "",
        jobWorkLocation: "",
        appliedWhere: "",
        appliedOnDate: "",
        jobStatus: "Applied",
    })    


    useEffect(() => {

        if (user) {
            setIsAuthenticated(true)
        }
        else {
            setIsAuthenticated(false)
            navigate("/error")
        }


    }, [user])

    async function handleAddJobSubmit(e)
    {   
        e.preventDefault()
        
        console.log(job)
        //onchange event on each field --done
        //check if all fields are there in job object --done
        //if yes, send post request to backend with all job data
        //wait for response
        const response = await axios.post("/api/v1/users/add-job", job)
        console.log(response)
        // if response is ok, update user data and  show job
        if(response.data.success)
        {
            sessionStorage.setItem("user", JSON.stringify(response.data.data))
          
          setUser(response.data.data)
          navigate("/dashboard")
        }
        else
        {
            navigate("/error")
        }
        //if response is not ok show popup or /error

    }

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white border-2 w-3/4 rounded-md my-3 px-3'>

                <form className="flex w-full flex-col gap-4 p-3" onSubmit={handleAddJobSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobTitle" value='Job Title: ' />
                        </div>
                        <TextInput id="jobTitle"
                            type="text"
                            name='jobTitle'
                            placeholder="Software Developer 1" 
                            value={job.jobTitle}
                            onChange={(e) => setJob({...job, jobTitle:e.target.value})}
                            required
                            
                            />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="companyName" value="Company Name" />
                        </div>
                        <TextInput id="companyName"
                            type="text"
                            name='companyName'
                            placeholder="Amazon"
                            value={job.companyName}
                            onChange={(e) => setJob({...job, companyName:e.target.value})}
                            
                            required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="companyWebsite" value="Company Website" />
                        </div>
                        <TextInput id="companyWebsite"
                            type="text"
                            name='companyWebsite'
                            placeholder="www.amazon.com" 
                            value={job.companyWebsite}
                            onChange={(e) => setJob({...job, companyWebsite:e.target.value})}
                           
                            required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobSalary" value="Job Salary" />
                        </div>
                        <TextInput id="jobSalary"
                            type="text"
                            name='jobSalary'
                            placeholder="$70/hr or ₹15,00,000 LPA" 
                            value={job.jobSalary}
                            onChange={(e) => setJob({...job, jobSalary:e.target.value})}
                           
                            required />
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobMinimumExperience" value="Job Minimum Experience" />
                        </div>
                        <TextInput id="jobMinimumExperience"
                            type="text"
                            name='jobMinimumExperience'
                            placeholder="2 years"
                            value={job.jobMinimumExperience}
                            onChange={(e) => setJob({...job, jobMinimumExperience:e.target.value})}
                           
                            required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobWorkLocation" value="Job Work Location" />
                        </div>
                        <TextInput id="jobWorkLocation"
                            type="text"
                            name='jobWorkLocation'
                            placeholder="Bengaluru, India" 
                            value={job.jobWorkLocation}
                            onChange={(e) => setJob({...job, jobWorkLocation:e.target.value})}
                           
                            required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="appliedWhere" value="Applied where?" />
                        </div>
                        <TextInput id="appliedWhere"
                            type="text"
                            name='appliedWhere'
                            placeholder="LinkedIn" 
                            value={job.appliedWhere}
                            onChange={(e) => setJob({...job, appliedWhere:e.target.value})}
                            
                            required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="appliedOnDate" value="Applied on date" />
                        </div>
                        <input
                            type='date'
                            className=' border-gray-300 rounded-lg text-gray-500 bg-gray-50 w-full'
                            id="appliedOnDate"
                            value={job.appliedOnDate}
                            name='appliedOnDate'
                            onChange={(e) => setJob({...job, appliedOnDate:e.target.value})}
                            
                            
                            required/>
                    </div>

                    <fieldset className="flex max-w-md flex-col gap-4">
                        <legend className="mb-4">Job Status</legend>
                        <div className="flex items-center gap-2">
                            <Radio id="applied" name="jobStatus" value="Applied" defaultChecked  onClick={(e) => setJob({...job, jobStatus:e.target.value})}/>
                            <Label htmlFor="applied">Applied</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="ongoing" name="jobStatus" value="Ongoing" onClick={(e) => setJob({...job, jobStatus:e.target.value})} />
                            <Label htmlFor="ongoing">Ongoing</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="accepted" name="jobStatus" value="Accepted" onClick={(e) => setJob({...job, jobStatus:e.target.value})} />
                            <Label htmlFor="accepted">Accepted</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="rejected" name="jobStatus" value="Rejected" onClick={(e) => setJob({...job, jobStatus:e.target.value})} />
                            <Label htmlFor="rejected">Rejected</Label>
                        </div>

                    </fieldset>
                    <Button color='success' type='submit'>Add Job</Button>
                </form>
            </div>
        </div>



    )
}

export default AddJobForm