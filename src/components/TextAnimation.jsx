import React from 'react'
import Typewriter from 'typewriter-effect'

function TextAnimation() {


  return (
    <div className='text-animation'>
            <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: [
                        'My fullname is Apostolos Lazidis.',
                        'I am a Software Engineer.'
                    ],
                }}
            />
    </div>
  )
}

export default TextAnimation