// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nvabar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Features from './Components/Features/Features';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
     
      </Routes>
    </>
  );
}

export default App;
