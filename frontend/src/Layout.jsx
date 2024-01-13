import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-slate-50'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout