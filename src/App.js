import React from 'react';
import './App.css';
// Components:
// import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        {/* Hero Section */}
        <HeroSection></HeroSection>
        <div className='section-division'></div>
        {/* About Section */}
        <AboutSection></AboutSection>
        {/* Projects Section */}
        <ProjectsSection></ProjectsSection>
        {/* Contact Section */}
        <div className='section-division'></div>
        <ContactSection></ContactSection>
        {/* Footer Section */}
        <FooterSection></FooterSection>
      </div>
    </React.Fragment>
  );
}

export default App;
