import { Paper } from '@mui/material'
import React from 'react'
import NewSection from '../components/NewSection'
import DevicesIcon from '@mui/icons-material/Devices';
import { codeIcon } from '../styles/styles';
import {SiJavascript,SiApachekafka,SiHtml5,SiCss3,SiMongodb,SiDocker} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {FaNodeJs} from 'react-icons/fa'
import SkillsIcon from '../components/SkillsIcon';
import SkillsList from '../components/SkillsList';

function SkillsTools() {
  return (
    <section className='container skills-tools-section' id='skills'>
      <NewSection 
          sectionTitle='Skills & Tools'
      />
      <div className='skills-tools'>
        <div className='skills-description'>
              <p>
                I have a broad range of applicable skills that will enable me to be a valuable
                member of your team. These include specific techical skills I have developed over the last
                year along with strong soft skills developed over the course of my career.
              </p>
        </div>
        <Paper className='skills-technical' elevation={4}>
          <div className='skills-technical-top'>
              <DevicesIcon sx={codeIcon.skills}/>
              <h2>Technical</h2>
              <p>I have been confidental using the following technologies</p>
          </div>
          <div className='skills-technical-middle'>
              <SkillsIcon
                icon={<SiJavascript className='media-icon' style={codeIcon.technologies}/>}
                desc='JavaScript'
              />
              <SkillsIcon
                icon={<RiReactjsLine className='media-icon' style={codeIcon.technologies}/>}
                desc='React.JS'
              />
              <SkillsIcon
                icon={<FaNodeJs className='media-icon' style={codeIcon.technologies}/>}
                desc='Node.JS'
              />
              <SkillsIcon
                icon={<SiApachekafka className='media-icon' style={codeIcon.technologies}/>}
                desc='Kafka'
              />
              <SkillsIcon
                icon={<SiMongodb className='media-icon' style={codeIcon.technologies}/>}
                desc='MongoDB'
              />
              <SkillsIcon
                icon={<SiHtml5 className='media-icon' style={codeIcon.technologies}/>}
                desc='HTML5'
              />
              <SkillsIcon
                icon={<SiCss3 className='media-icon' style={codeIcon.technologies}/>}
                desc='CSS'
              />
              <SkillsIcon
                icon={<SiDocker className='media-icon' style={codeIcon.technologies}/>}
                desc='Docker'
              />
          </div>
          <div className='skills-technical-bottom'>
              <p>I have also become familiar with these technologies</p>
              <div className='technical-bottom-list'>
                <SkillsList />
              </div>
          </div>
        </Paper>
        <div className='current-work-text'>
          <p>
            <strong>Currently working on : </strong><br/><br/> 
            Improving my Skills & Develop e-commerce website using microservices pattern and technologies like React.JS, Node.JS, Express, MongoDB, Stripe, Kafka, Docker
          </p>
        </div>
      </div>
    </section>
  )
}

export default SkillsTools