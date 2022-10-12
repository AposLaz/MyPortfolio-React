import React from 'react'
import {FaGithubAlt,FaInstagram,FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

function SocialButtons() {
  return (
    <div className="effect amiens">
            <div className="social-buttons">
                <a className="github" href="https://github.com/AposLaz" title="Join me on Github" target="_blank" rel="noreferrer noopener">
                    <FaGithubAlt className='social-icon'/>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/apostolos-lazidis/" title="Join me on LinkedIn" target="_blank" rel="noreferrer noopener">
                    <FaLinkedinIn className='social-icon'/>
                </a>
                <a className="instagram"  href="https://www.instagram.com/apostoloslazidis/" title="Join me on Instagram" target="_blank" rel="noreferrer noopener">
                    <FaInstagram className='social-icon'/>
                </a>
                <a className="gmail" href="mailto:aplazidis@gmail.com" title="Send me an Email"target="_blank" rel="noreferrer noopener" >
                    <SiGmail className='social-icon'/>
                </a>
                <a className="facebook" href="https://www.facebook.com/apostolos.lazidis" title="Join me on Facebook" target="_blank" rel="noreferrer noopener">
                    <FaFacebookF className='social-icon'/>
                </a>
        </div>
    </div>
  )
}

export default SocialButtons