import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ViewResume from './components/ViewResume';
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet-async";

const TRACKING_ID = "G-4W1HHPVY7N"; //TRacking ID for google analytics
ReactGA.initialize(TRACKING_ID); //initialize

function App() {
  return (
    <>
    <BrowserRouter>
        <Helmet prioritizeSeoTags>
            <title>Aplaz Portfolio</title>
            <link rel='canonical' href='https://www.aplaz.gr'/>
            <meta name='author' content='Apostolos Lazidis'/>

            <meta property='og:title' content='Aplaz Portfolio'/>
            <meta property='og:site_name' content='Aplaz'/>
            <meta property='og:url' content='https://www.aplaz.gr'/>
            <meta property='og:type' content='website' />
            <meta
              name="description"
              content="Hello my name is Apostolos Lazidis (Aplaz) and this is my portfolio."
            />
            <meta
              name="keywords"
              content="Aplaz, aplaz, AposLaz, Apos Laz,Apostolos, Lazidis, Apostolos Lazidis, 
                        apostolos, lazidis, apostolos lazidis, 
                        Απόστολος Λαζίδης, αποστολος λαζιδης, αποστολης, 
                        τολης, Αποστολης, Τολης, Kafka, Apache Kafka, RabbitMQ"
            />
        </Helmet>
        <NavBar />
        <Routes>
          <Route exact path='/resume' element={<ViewResume />}/>
          <Route exact path="/" element={<Home />}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
        <Footer />

    </BrowserRouter>

    </>
  );
}

export default App;
