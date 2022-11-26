import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ViewResume from './components/ViewResume';
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";

const TRACKING_ID = "G-4W1HHPVY7N"; //TRacking ID for google analytics
ReactGA.initialize(TRACKING_ID); //initialize

function App() {
  return (
    <>
    <BrowserRouter>
        <Helmet>
            <title>Aplaz Portfolio</title>
            <meta
              name="description"
              content="Apostolos Lazidis Portfolio. Learn more for me and download my CV."
            />
            <meta
              name="keywords"
              content="Apostolos, Lazidis, Apostolos Lazidis, 
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
