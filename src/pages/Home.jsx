import React from 'react'
import { About, Hero, Navbar } from '../components'

const Home = () => {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
    </div>
  )
}

export default Home