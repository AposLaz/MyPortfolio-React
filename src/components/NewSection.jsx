import React from 'react'

function NewSection({sectionTitle}) {
  return (
    <section className='new-section-hr'>
        <div className='about'>
            <h1>{sectionTitle}</h1>
            <div className="small-underline"></div>
            <div className="big-underline"></div>
        </div>
    </section>
  )
}

export default NewSection