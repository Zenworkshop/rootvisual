import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import ChemicalAnchor from "./pages/ChemicalAnchor";
import ChemicalRebar from "./pages/ChemicalRebar";
import PullOut from "./pages/PullOut";
import CoringLantai from "./pages/CoringLantai";
import FireStop from "./pages/FireStop";
import WaterProofing from "./pages/WaterProofing";
import SocialButtons from './components/SocialButtons';
import ReactPixel from 'react-facebook-pixel';


function App() {
  useEffect(() => {
    const options = {
      autoConfig: true,
      debug: false,
    };

    ReactPixel.init('YOUR_PIXEL_ID', undefined, options); // 'undefined' gantiin null di TS
    ReactPixel.pageView(); // Track page view
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chemical-anchor" element={<ChemicalAnchor />} />
          <Route path="/chemical-rebar" element={<ChemicalRebar />} />
          <Route path="/pull-out-test" element={<PullOut />} />
          <Route path="/coring-lantai" element={<CoringLantai />} />
          <Route path="/fire-stop" element={<FireStop />} />
          <Route path="/water-proofing" element={<WaterProofing />} />

        </Routes>
        <SocialButtons />
      </div>
    </Router>
  );
}

export default App;