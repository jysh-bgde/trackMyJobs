
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ProfileForm from './components/ProfileForm/ProfileForm'

function App() {
 

  return (
    <div className='flex flex-col justify-evenly '>
     <Navbar/>
     {/* <ProfileForm/> */}
     <Footer/>
    </div>
  )
}

export default App
