
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FreeCard from './components/FreeCard/FreeCard'
import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/Navbar/Navbar'
import PremiumCard from './components/PremiumCard/PremiumCard'
import ProfileForm from './components/ProfileForm/ProfileForm'

function App() {


  return (
    <div className='flex flex-col bg-slate-50'>
      <Navbar />
      {/* <LoginForm/> */}
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <ProfileForm/> */}
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center gap-3'>
          <FreeCard />
          <PremiumCard />

        </div>
        <div className='bg-white p-3 border-2 rounded-md my-2'>
          <label htmlFor="premium">Enter email if interested in premium</label>
          <input type="email" name='premium' id='premium' className='border-2 mx-2' placeholder='Email...' />
          <button type='button' className='bg-green-500 border-2 rounded-md px-3'>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
