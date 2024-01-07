
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ProfileForm from './components/ProfileForm/ProfileForm'

function App() {
 

  return (
    <div className='flex flex-col justify-evenly '>
     <Navbar/>
     <Contact/>
     {/* <About/> */}
     {/* <ProfileForm/> */}
     <Footer/>
    </div>
  )
}

export default App
