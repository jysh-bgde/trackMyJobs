import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'


const Layout = () => {
  return (
    <UserContextProvider>
    <div className='bg-slate-50'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </UserContextProvider>
    
  )
}

export default Layout