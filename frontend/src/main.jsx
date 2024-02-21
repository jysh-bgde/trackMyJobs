import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import ProfileForm from './components/ProfileForm/ProfileForm.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Error from './components/Error/Error.jsx'
import AddJobForm from './components/AddJobForm/AddJobForm.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >

      <Route path='' element={<Home/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='profile' element={<ProfileForm/> } />
      <Route path='login' element={<LoginForm/> } />
      <Route path='register' element={<RegisterForm/> } />
      {/* <Route path='blogs' element={<Blogs/>} /> */}
      <Route path='addJob' element={<AddJobForm/>} />
      <Route path='error' element={<Error/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}>
      {/* <App/> */}
      </RouterProvider>
  </React.StrictMode>,
)
