import React from 'react';
import './App.css';
// Components:
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className='App'>
      {/* <Navbar Section */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
