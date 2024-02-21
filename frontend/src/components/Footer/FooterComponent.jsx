import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Footer, TextInput, Button, Label, FooterLink } from 'flowbite-react';
import UserContext from "../../context/UserContext"

const FooterComponent = () => {

  // const [result, setResult] = React.useState("");

  // const onSubmit = async (event) => {

  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //     setResult(res.message);
  //   } else {
  //     console.log("Error", res);
  //     setResult(res.message);
  //   }
  // };
  

  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between flex-wrap sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='text-green-500 font-bold text-2xl'>
            {/* <Footer.Brand
              href="/"
              src="tmjLogoBgWhite.png"
              alt="Track My Job Logo"
              
              
            >Track My Jobs</Footer.Brand> */}
            <div className='flex'>
             <img src="tmjLogoBgWhite.png" className="mr-3 h-6 sm:h-9 object-cover" alt="Track My Job Logo" />
        <Link href="/" className="self-center whitespace-nowrap text-xl text-green-500 font-semibold ">Track My Jobs</Link>

            </div>
          </div>
          <div className="flex-wrap flex gap-8 sm:mt-4 sm:gap-6">
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Link to="/" className='hover:text-green-600 font-semibold'>Home</Link>
                <Link to="/about" className='hover:text-green-600 font-semibold'>About</Link>
                <Link to="/blogs" className='hover:text-green-600 font-semibold'>Blogs</Link>
                <Link to="/contact" className='hover:text-green-600 font-semibold'>Contact</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Subscribe us" />

              <form action="https://api.web3forms.com/submit" method="post">
              
              <input type="hidden" name="access_key" value="d2718fbf-a525-490a-8439-badbc4a2951e"/>
              <input type="hidden" name="subject" value="New subscriber submission "/>
              <input type="hidden" name="redirect" value="https://web3forms.com/success?title=Subscribed%20to%20Track%20My%20Jobs&desc=Thank%20you%20for%20subscribing%20to%20Track%20My%20Jobs"/>
              <input type="hidden" name="from_name" value="Track My Jobs"></input>
              <input type="checkbox" name="botcheck" id="" className='hidden' style={{display: 'none'}}/>
              <Label htmlFor="subscribeEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</Label>
              <div className='flex'>

        <TextInput type="email" id="subscribe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com"  name="subscribe" required autoComplete='off'/>
        <Button color="success" className='mx-2' type='submit'>Subscribe</Button>
              </div>
              </form>
              {/* <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup> */}
            </div>
            {/* <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="Track My Jobs™" year={2023} />
          {/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div> */}
        </div>
      </div>
    </Footer>
  )
}

export default FooterComponent