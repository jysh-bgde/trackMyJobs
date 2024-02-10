import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/FooterComponent'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'
import  FooterComponent  from './components/Footer/FooterComponent'


const Layout = () => {
  return (
    <UserContextProvider>
    <div className='bg-slate-50'>
    <Navbar/>
    <Outlet/>
    <FooterComponent/>
    </div>
    </UserContextProvider>
    
  )
}

export default Layout