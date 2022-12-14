import React, {useEffect} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import NewSection from './NewSection';

import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
// import { ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import viewPdf from '../assets/files/cv-Lazidis.pdf'
import { openPlugin } from '@react-pdf-viewer/open';
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet-async';

export const ViewResume = () => {

    //rerender scroll to top
    useEffect(() => {
      window.scrollTo(0, 0);
      ReactGA.pageview(window.location.pathname);   //google analytics
    }, [])

     const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

    const ToolbarSlot = (TransformToolbarSlot) => ({
        ...TransformToolbarSlot,
        Open: () => <></>,
        OpenMenuItem: ()=><></>
    });


  return (
    <>
      <Helmet prioritizeSeoTags>
            <title>Aplaz Resume</title>
            <meta property='og:title' content='Aplaz Resume'/>
            <meta property='og:site_name' content='Aplaz Resume'/>
            <meta property='og:url' content='https://www.aplaz.gr/resume'/>
            <meta property='og:type' content='website' />
            <meta
              name="description"
              content="Here you will find Apostolos Lazidis (Aplaz) Resume."
            />
            <meta
              name="keywords"
              content="Apostolos, Lazidis, Apostolos Lazidis, 
                        apostolos, lazidis, apostolos lazidis, 
                        Απόστολος Λαζίδης, αποστολος λαζιδης, αποστολης, 
                        τολης, Αποστολης, Τολης, Kafka, Apache Kafka, RabbitMQ"
            />
        </Helmet>
        <div className='container' id='resume'>
    
      <div className='resume-cls'>
        <NewSection 
          sectionTitle='Resume'
        />

        
          <div className='pdf-container'>
            {/* show pdf conditionally (if we have one)  */}
            {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%'
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '0.25rem',
                }}
            >
                <Toolbar>{renderDefaultToolbar(ToolbarSlot)}</Toolbar>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={viewPdf} plugins={[openPlugin,toolbarPluginInstance]} />
            </div>
        </div>
          </Worker></>}

          {/* if we dont have pdf or viewPdf state is null */}
          {!viewPdf&&<>No pdf file selected</>}
          </div>

        </div>
    </div>
    </>
    
    
    
  )
}

export default ViewResume
