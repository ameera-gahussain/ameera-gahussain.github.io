import React, {useEffect} from 'react'
import ReactGA from 'react-ga';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-LR2CQHEMDK');
    ReactGA.pageview(window.location.pathname + window.location.search)
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

export default App;
