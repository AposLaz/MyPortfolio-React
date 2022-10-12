import React from 'react'
import NewSection from '../components/NewSection'
import ProjectCard from '../components/ProjectCard'
import {projectCardData} from '../assets/data/data'
import GitHubIcon from '@mui/icons-material/GitHub';
import {projectCardGitIcon} from '../styles/styles'
import { IconButton } from '@mui/material';

function Projects() {
  return (
    <section className='container projects-section' id='projects'>
        <NewSection 
            sectionTitle='Projects'
        />
        <div className='projects'>
            <div className='projects-description'>
                <p>
                  Here you can find some of my recent projects. Get a look in my repository for other projects to  
                  <span>
                    <IconButton 
                      sx={projectCardGitIcon.button} 
                      disableRipple 
                      disableFocusRipple 
                      aria-label='github'
                      onClick={() => window.open('https://github.com/AposLaz', "_blank", 'noopener,noreferrer')}
                      >
                      <GitHubIcon 
                          sx={projectCardGitIcon.text}
                        /> 
                    </IconButton>
                  </span>.
                </p>
            </div>
            <div className='project-cards'>
                {
                  projectCardData.map((item)=>{
                    return (
                          <ProjectCard 
                              key={item.id}
                              title={item.title}
                              desc={item.description}
                              img={item.image}  
                              url={item.github}
                          />
                    )
                  })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Projects