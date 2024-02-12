import { Button, Checkbox, Datepicker, Label, Radio, TextInput } from 'flowbite-react'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const AddJobForm = () => {

    const {user} = useContext(UserContext)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()
  
    useEffect(() => {
      
      if(user)
      {
        setIsAuthenticated(true)
      }
      else
      {
        setIsAuthenticated(false)
        navigate("/error")
      }
  
      
    }, [user])

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white border-2 w-3/4 rounded-md my-3 px-3'>
                {/* <form>

                    <div>
                        <label htmlFor="jobTitle">Job Title: </label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='jobTitle' id='jobTitle' />
                    </div>

                    <div>
                        <label htmlFor="company">Company: </label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='company' id='company' />
                    </div>

                    <div className='flex'>
                        <fieldset>

                        <legend >Job Status: </legend>
                        
                        <div>
                            <input className='border-2 mx-3 px-3 rounded-md'  type="radio" name='jobStatus' id='applied' value="applied" />
                            <label htmlFor="applied"  >Applied</label>
                        </div>

                        <div>
                            <input className='border-2 mx-3 px-3 rounded-md'  type="radio" name='jobStatus' id='ongoing' value="ongoing" />
                            <label htmlFor="ongoing">ongoing</label>
                        </div>

                        <div>
                            <input className='border-2 mx-3 px-3 rounded-md'  type="radio" name='jobStatus' id='accepted' value="accepted" />
                            <label htmlFor="accepted">accepted</label>
                        </div>
                        <div>
                            <input className='border-2 mx-3 px-3 rounded-md'  type="radio" name='jobStatus' id='rejected' value="rejected" />
                            <label htmlFor="rejected">rejected</label>

                        </div>
                        
                        </fieldset>

                    </div>
                    <div>
                        <label htmlFor="companyWebsite">Company Website</label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='companyWebsite' id='companyWebsite' />
                    </div>
                    <div>
                        <label htmlFor="appliedOnDate">Applied On Date</label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='appliedOnDate' id='appliedOnDate' />
                    </div>
                    <div>
                        <label htmlFor="appliedWhere">Applied Where?</label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='appliedWhere' id='appliedWhere' />
                    </div>
                    <div>
                        <label htmlFor="jobSalary">Job Salary</label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='jobSalary' id='jobSalary' />
                    </div>
                    <div>
                        <label htmlFor="jobMinimumExperience">Job Minimum Experience</label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='jobMinimumExperience' id='jobMinimumExperience' />
                    </div>
                    <div>
                        <label htmlFor="jobWorkLocation">Job Work Location</label>
                        <input className='border-2 mx-3 px-3 rounded-md'  type="text" name='jobWorkLocation' id='jobWorkLocation' />
                    </div>

                </form> */}
                <form className="flex w-full flex-col gap-4 p-3">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobTitle" value='Job Title: ' />
                        </div>
                        <TextInput id="jobTitle"
                            type="text"
                            name='jobTitle'
                            placeholder="Software Developer 1" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="companyName" value="Company Name" />
                        </div>
                        <TextInput id="companyName"
                            type="text"
                            name='companyName'
                            placeholder="Amazon" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="companyWebsite" value="Company Website" />
                        </div>
                        <TextInput id="companyWebsite"
                            type="text"
                            name='companyWebsite'
                            placeholder="www.amazon.com" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobSalary" value="Job Salary" />
                        </div>
                        <TextInput id="jobSalary"
                            type="text"
                            name='jobSalary'
                            placeholder="$70/hr or ₹15,00,000 LPA" required />
                    </div>
                    

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobMinimumExperience" value="Job Minimum Experience" />
                        </div>
                        <TextInput id="jobMinimumExperience"
                            type="text"
                            name='jobMinimumExperience'
                            placeholder="2 years" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobWorkLocation" value="Job Work Location" />
                        </div>
                        <TextInput id="jobWorkLocation"
                            type="text"
                            name='jobWorkLocation'
                            placeholder="Bengaluru, India" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="appliedWhere" value="Applied where?" />
                        </div>
                        <TextInput id="appliedWhere"
                            type="text"
                            name='appliedWhere'
                            placeholder="LinkedIn" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="appliedOnDate" value="Applied on date" />
                        </div>
                        <Datepicker id="appliedOnDate"
                            type="text"
                            name='appliedOnDate'
                         required />
                    </div>

                    <fieldset className="flex max-w-md flex-col gap-4">
                        <legend className="mb-4">Job Status</legend>
                        <div className="flex items-center gap-2">
                            <Radio id="applied" name="jobStatus" value="Applied" defaultChecked />
                            <Label htmlFor="applied">Applied</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="ongoing" name="jobStatus" value="Ongoing" />
                            <Label htmlFor="ongoing">Ongoing</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="accepted" name="jobStatus" value="Accepted" />
                            <Label htmlFor="accepted">Accepted</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="rejected" name="jobStatus" value="Rejected" />
                            <Label htmlFor="rejected">Rejected</Label>
                        </div>

                    </fieldset>
                <Button color='success'>Add Job</Button>
                </form>
            </div>
        </div>



    )
}

export default AddJobForm