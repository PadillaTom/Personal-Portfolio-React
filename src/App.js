import React, { useRef } from 'react';
import './App.css';
// Components:
// import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import ProjectsSection from './components/ProjectsSection';

// Scroll :
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
// General scroll to element function

function App() {
  // Scroll:
  const projRef = useRef(null);
  const contactRef = useRef(null);
  const executeScrollProj = () => scrollToRef(projRef);
  const executeScrollCont = () => scrollToRef(contactRef);

  return (
    <React.Fragment>
      <div className='App'>
        {/* Hero Section */}
        <HeroSection executeScrollProj={executeScrollProj}></HeroSection>
        <div className='section-division'></div>
        {/* About Section */}
        <AboutSection
          projRef={projRef}
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
