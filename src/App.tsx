import {useEffect} from 'react'
import ReactGA from 'react-ga4';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./index.css";

function App() {
  useEffect(() => {
    ReactGA.initialize('G-LR2CQHEMDK');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
    },[]);
  
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App