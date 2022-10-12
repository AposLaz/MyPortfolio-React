import React from 'react'
import NewSection from '../components/NewSection'
import EditButton from '../components/EditButton'
import EditCard from '../components/EditCard'

function About() {

    const DownloadResume = ()=>{
        console.log('OK')
        // using Java Script method to get PDF file
        fetch('cv-Lazidis.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cvLazidis.pdf';
                alink.click();
            })
        })
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
                        btnText='Download CV'
                        outline={true}
                        onClick={DownloadResume()}
                    />
                    <EditButton
                        btnText='View CV'
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