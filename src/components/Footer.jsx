import React from 'react'
import SocialButtons from './SocialButtons'

function Footer() {

  const year = new Date().getFullYear()

  return (
    <div className='footer'>
        <div className='footer-context'>
            <hr />
            <div className='footer-container'>
                <div className='footer-left'>
                © {year} Apostolos Lazidis
                </div>
                <div className='footer-right'>
                <SocialButtons />
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer