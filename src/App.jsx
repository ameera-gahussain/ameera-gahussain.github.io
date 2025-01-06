import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
