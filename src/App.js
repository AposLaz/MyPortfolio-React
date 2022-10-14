import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ViewResume from './components/ViewResume';

function App() {
  
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/resume' element={<ViewResume />}/>
          <Route path="/" element={<Home />}/>
          {/* <Route path="*" element={<Navigate to="/resume" replace/>}/> */}
        </Routes>
        <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
