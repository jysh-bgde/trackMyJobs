
import './App.css'
import About from './components/About/About'
import AddJobForm from './components/AddJobForm/AddJobForm'
import Cards from './components/Cards/Cards'
import Contact from './components/Contact/Contact'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'

import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/Navbar/Navbar'



function App() {


  return (
   
    <div className='flex flex-col bg-slate-50'>
      <Navbar />
      <Footer />
    </div>
   
  )
}

export default App
