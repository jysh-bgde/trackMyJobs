import React from 'react'
import Header from '../Header/Header'
import Cards from '../Cards/Cards'
import HomeSection2 from '../HomeSection2/HomeSection2'
import HomeSection3 from '../HomeSection3/HomeSection3'
import FAQs from '../FAQs/FAQs'
import HomeSection4 from '../HomeSection4/HomeSection4'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeSection2/>
        <HomeSection3/>
        <Cards/>
        <HomeSection4/>
        <FAQs/>
    </div>
    
  )
}

export default Home