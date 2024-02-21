import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/FooterComponent'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'
import  FooterComponent  from './components/Footer/FooterComponent'
import { Flowbite } from 'flowbite-react'
import Header from './components/Header/Header'


const Layout = () => {
  return (
      <Flowbite>
    <UserContextProvider>
   
    <Navbar/>
   
    <Outlet/>
    <FooterComponent/>
   
    </UserContextProvider>
    </Flowbite>
  )
}

export default Layout