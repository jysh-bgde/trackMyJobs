import React from 'react'
import {Card} from "flowbite-react"

const About = () => {
    return (
        <div className='flex justify-center items-center p-3'>
        <Card className='dark:text-white'>
            
            <h1 className='text-3xl font-bold'>
                 <span className='text-green-500 '>About Track My Jobs</span>
            </h1>
            <br />
            <p>
                <b className='text-green-500 font-bold'>We believe the job hunt shouldn't be a wild goose chase.</b> It should be a strategic, organized sprint toward landing your dream career. That's why we built <span className='font-semibold text-green-500'>Track My Jobs</span>: a powerful tool to <b className='text-green-500 font-bold'>streamline your search, conquer chaos, and land your next big opportunity.</b>

            </p>
            <br />

            <p className='text-2xl'><b className='text-green-500 font-bold'>Our Story:</b></p>
            <br />
            <p>
                We've all been there. Buried in spreadsheets, juggling application deadlines, and drowning in a sea of open tabs. The stress is real, the time drain is frustrating, and the lack of organization can make you feel like you're running on a hamster wheel.
            </p>
        <br />
            <p>
                That's when we had the lightbulb moment. We needed a system, a digital command center where we could <b className='text-green-500 font-bold'>track applications, analyze results, and stay on top of every step</b> in the process. And guess what? We couldn't find one, so we built it ourselves.

            </p>
        <br />
            <p className='text-2xl'><b className='text-green-500 font-bold'>What We Do:</b></p>
        <br />
            <p>
                <b className='text-green-500 font-bold'>Track My Jobs</b> is more than just a job board. We're your <b className='text-green-500 font-bold'>personal job hunting assistant</b> and organizational guru, rolled into one. Here's what we offer:
            </p>

<br />

            
                <p>
                <b className='text-green-500 font-bold'>Application tracker:</b> Say goodbye to scattered emails and lost resumes. Keep track of everything in one place.</p>
                <p><b className='text-green-500 font-bold'>Status organizer:</b> Monitor the progress of your applications, from submitted to interviewed to landed.</p>
                {/* <p><b className='text-green-500 font-bold'>Performance insights:</b> Analyze your resume performance, learn which platforms work best for you, and refine your search strategy.</p> */}
                
            
<br />
            <p className='text-2xl'><b className='text-green-500 font-bold'>Our Mission:</b></p>
<br />
            <p>
                We're passionate about helping job seekers <b className='text-green-500 font-bold'>take control of their career journey.</b> We believe everyone deserves a fair shot at landing their dream job, and we're here to empower you with the tools and resources to make it happen. So, ditch the spreadsheets, silence the alarm clock, and join us. It's time to <b className='text-green-500 font-bold'>transform your job hunt into a confident, organized success story.</b>
            </p>
<br />
            <p>
                <b className='text-green-500 '>
                    Ready to take control? Sign up for Track My Job today and find your dream job, stress-free!</b>
            </p>
<br />
            <p>
              <span className='text-2xl'>  <b className='text-green-500 font-bold'>
                    P.S.
                </b></span>
                We're constantly adding new features and improvements, so stay tuned for even more ways to conquer your job hunt!
            </p>

<br />
            </Card>
        </div>
    )
}

export default About