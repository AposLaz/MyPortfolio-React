import React, {useEffect} from 'react'
import Avatar from '@mui/material/Avatar'
import AposLaz from '../assets/images/me-v2.jpg'
import {avatar_style} from '../styles/styles'
import TextAnimation from '../components/TextAnimation'
import SocialButtons from '../components/SocialButtons'
import EditButton from '../components/EditButton'

function Hero() {

  //rerender scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const redirectToSection = (id)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }


  return (
    <section>
        <div className='container hero' id='home'>
          <div className='hero-up'>
            <div className='hero-left'>
              <div className='hero-header'>
                <h1>Hey <span aria-label='waving-hand'>👋,</span></h1>
                <h1>I'm Apostolos</h1>
                <h1>I build things for the Web</h1>
              </div>
              <div className='hero-description'>
                <TextAnimation />
                <br/>
                <p>Welcome to my portfolio website.</p>
                <div className='hero-btn'>
                  <EditButton 
                    btnText='About me'
                    outline={true}
                    action={redirectToSection}
                    id='about'
                  />
                  <EditButton
                    btnText='Skills & Tools'
                    outline={false}
                    action={redirectToSection}
                    id='skills'
                  />
                </div>
              </div>
            </div>
            <div className='hero-right'>
              <Avatar className='avatar' src={AposLaz} alt='ApostolosLazids' sx={avatar_style.home}/>
              <div className='social-hero'>
                <SocialButtons /> 
              </div>
            </div>
            </div>
          <div className='hero-down'>
            
            
          </div>
          
        </div>
    </section>
  )
}

export default Hero