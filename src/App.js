import React, { useRef } from 'react';
import './App.css';
// Components:
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import ProjectsSection from './components/ProjectsSection';

// Scroll :
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const scrollToRefNav = (ref) => window.scrollTo(0, ref.current.offsetTop - 63);
// General scroll to element function

function App() {
  // Scroll:
  const projRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const executeScrollProj = () => scrollToRef(projRef);
  const executeScrollCont = () => scrollToRef(contactRef);
  const executeScrollAbout = () => scrollToRef(aboutRef);
  const executeScrollHome = () => scrollToRef(homeRef);
  const executeScrollProjMinus = () => scrollToRefNav(projRef);
  const executeScrollContMinus = () => scrollToRefNav(contactRef);
  const executeScrollAboutMinus = () => scrollToRefNav(aboutRef);
  const executeScrollHomeMinus = () => scrollToRefNav(homeRef);

  return (
    <React.Fragment>
      <div className='App'>
        {/* Navbar Section */}
        <Navbar
          executeScrollProj={executeScrollProj}
          executeScrollCont={executeScrollCont}
          executeScrollAbout={executeScrollAbout}
          executeScrollHome={executeScrollHome}
          executeScrollProjMinus={executeScrollProjMinus}
          executeScrollContMinus={executeScrollContMinus}
          executeScrollAboutMinus={executeScrollAboutMinus}
          executeScrollHomeMinus={executeScrollHomeMinus}
        ></Navbar>

        {/* Hero Section */}
        <HeroSection
          executeScrollProj={executeScrollProj}
          homeRef={homeRef}
          aboutRef={aboutRef}
        ></HeroSection>

        <div className='section-division'></div>
        {/* About Section */}
        <AboutSection
          projRef={projRef}
          aboutRef={aboutRef}
          executeScrollProj={executeScrollProj}
          executeScrollCont={executeScrollCont}
        ></AboutSection>
        {/* Projects Section */}
        <ProjectsSection projRef={projRef}></ProjectsSection>
        {/* Contact Section */}
        <div className='section-division'></div>
        <ContactSection contactRef={contactRef}></ContactSection>
        {/* Footer Section */}
        <FooterSection></FooterSection>
      </div>
    </React.Fragment>
  );
}

export default App;
