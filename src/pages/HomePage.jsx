import React from 'react'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Recommendations from '../components/Recommendations/Recommendations'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Layout/Footer'

const Home = ({activeNav , setActiveNav}) => {
  return (
    <div className='w-full'>
     <Hero/>
     <Projects/>
     <Recommendations/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home
