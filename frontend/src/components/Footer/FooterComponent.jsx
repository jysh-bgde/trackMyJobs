import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, TextInput, Button } from 'flowbite-react';

const FooterComponent = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="tmjLogoBgWhite.png"
              alt="Track My Job Logo"
              name="Track My Job"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
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
              <label htmlFor="subscribeEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
              <div className='flex'>

        <input type="email" id="subscribeEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
        <Button color="success" className=' mx-2'>Success</Button>
              </div>
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