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
          <Route exact path='/resume' element={<ViewResume />}/>
          <Route exact path="/" element={<Home />}/>
          <Route path="/*" element={<Navigate replace to="/" />}/>
        </Routes>
        <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
