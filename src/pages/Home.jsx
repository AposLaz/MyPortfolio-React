import React, { useEffect } from 'react'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import SkillsTools from './SkillsTools'
import ReactGA from 'react-ga';

function Home() {
  //google analytics 
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname)
  },[]);

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