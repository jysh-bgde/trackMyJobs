import React from 'react'

const AddJobForm = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white border-2 w-3/4 rounded-md my-3 px-3'>
                <form>

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

                </form>
            </div>
        </div>
    )
}

export default AddJobForm