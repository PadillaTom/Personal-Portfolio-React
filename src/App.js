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
const scrollToRefDesk = (ref) => window.scrollTo(0, ref.current.offsetTop - 73);
const scrollToRefDesk2 = (ref) =>
  window.scrollTo(0, ref.current.offsetTop - 70);
const scrollToRefNav = (ref) => window.scrollTo(0, ref.current.offsetTop - 70);
// General scroll to element function

function App() {
  // Scroll:
  const projRef = useRef(null);
  const projRefDesk = useRef(null);
  const contactRef = useRef(null);
  const contactRefDesk = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const executeScrollProj = () => scrollToRef(projRef);
  const executeScrollProjDesktop = () => scrollToRefDesk2(projRefDesk);
  const executeScrollCont = () => scrollToRef(contactRef);
  const executeScrollContDesktop = () => scrollToRefDesk(contactRefDesk);
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
          executeScrollProjDesktop={executeScrollProjDesktop}
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
          executeScrollContDesktop={executeScrollContDesktop}
          executeScrollProjDesktop={executeScrollProjDesktop}
        ></AboutSection>
        {/* Projects Section */}
        <ProjectsSection
          projRef={projRef}
          projRefDesk={projRefDesk}
        ></ProjectsSection>
        {/* Contact Section */}
        <div className='section-division'></div>
        <ContactSection
          contactRef={contactRef}
          contactRefDesk={contactRefDesk}
        ></ContactSection>
        {/* Footer Section */}
        <FooterSection></FooterSection>
      </div>
    </React.Fragment>
  );
}

export default App;
