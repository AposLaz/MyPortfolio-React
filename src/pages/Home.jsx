import React from 'react'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import SkillsTools from './SkillsTools'

function Home() {
  return (
    <div className='main'>
        <Hero />
        <About />
        <SkillsTools />
        <Projects />
    </div>
  )
}

export default Home