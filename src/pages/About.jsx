import React from 'react'
import NewSection from '../components/NewSection'
import EditButton from '../components/EditButton'
import EditCard from '../components/EditCard'
import { useNavigate } from "react-router-dom";

function About() {
    let navigate = useNavigate(); 

    const ViewResumeFunc = ()=>{
        navigate('/resume')
    }

    const redirectToSection = (id)=>{
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }    

  return (
    <div className='container about' id='about'>
        <NewSection 
            sectionTitle='About me'
        />
        <div className='about-section' >
            <div className='about-left'>
                <h3>Story</h3>
                <hr className='about-hr'/>
                <p className='about-text-info'>
                    I began my studies as undergratuated student at Technical University of Crete (TUC) 8 years ago. 
                    There I get in touch with IT systems. Especially the course of SQL 
                    inspired me to follow the career of Software Engineer. When I was in University senior year,
                    I took a dissertation with title :
                    <strong> Publication and Subscription Services in Web Applications : Α Comparative Study. </strong>
                    The Publish - Subscribe service is designed to facilitate communication between 
                    applications or users with web applications. 
                    The scope of this dissertation was to compare features and operations supported by 7 Publish-Subscribe systems
                    named Apache Kafka, RabbitMQ, Orion-LD Broker, Scorpio Broker, Stellio Broker, Pushpin & Faye.
                    <strong> Apache Kafka & RabbitMQ </strong> are the most known systems and I was excited when I read about them and their
                    operations. As a consequence, from my thesis published 2 papers.
                    <br />
                    <br />
                    I am passionate learning new technologies and currently I want improve my technical skills.
                    If you want learn more about me view or download my Resume.
                </p>
                <div className='btn-download-cv'>
                    <EditButton 
                        btnText='View Resume'
                        outline={true}
                        onClick={ViewResumeFunc}
                    />
                    <EditButton
                        btnText='View Projects'
                        action={redirectToSection}
                        id='projects'
                    />
                </div>
            </div>
            <div className='about-right'>
                <h3>Publications</h3>
                <hr className='about-hr'/>
                <EditCard />
            </div>
        </div>
    </div>
  )
}

export default About