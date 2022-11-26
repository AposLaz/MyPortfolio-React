import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ViewResume from './components/ViewResume';
import ReactGA from 'react-ga'


const TRACKING_ID = "G-4W1HHPVY7N"; //TRacking ID for google analytics
ReactGA.initialize(TRACKING_ID); //initialize

function App() {
  
  return (
    <>
    <BrowserRouter>
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
