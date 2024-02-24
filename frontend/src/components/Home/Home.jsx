import React from 'react'
import Header from '../Header/Header'
import Cards from '../Cards/Cards'
import HomeSection2 from '../HomeSection2/HomeSection2'
import HomeSection3 from '../HomeSection3/HomeSection3'
import FAQs from '../FAQs/FAQs'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeSection2/>
        <HomeSection3/>
        <Cards/>
        <FAQs/>
    </div>
    
  )
}

export default Home