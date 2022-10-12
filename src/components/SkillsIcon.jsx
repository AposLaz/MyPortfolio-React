import React from 'react'

function SkillsIcon({icon, desc}) {
  return (
    <div className='skills-icons'>
        <div className='icon' aria-label={desc}>
            {icon}
        </div>
        <div className='description'>
            {desc}
        </div>
    </div>
  )
}

export default SkillsIcon