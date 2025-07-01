// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Projects from './pages/Projects';
import VisitBooking from './pages/VisitBooking';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsapp';
import ResidentialProject from './pages/Heaven Atmos/ResidentialProject.jsx';
import CommercialProject from './pages/Heaven Park/ResidentialProject'

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/visit" element={<VisitBooking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/residential" element={<ResidentialProject />} />
          <Route path="/projects/commercial" element={<CommercialProject />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
