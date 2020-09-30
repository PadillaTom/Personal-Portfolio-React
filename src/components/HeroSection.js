import React from 'react';

const HeroSection = ({ executeScrollProj, homeRef }) => {
  return (
    <React.Fragment>
      <section className='section' ref={homeRef}>
        <div className='hero-container'>
          <div className='hero-info-container'>
            <h4>Hi, my name is </h4>
            <h4>Tomas Padilla.</h4>
            <h4>I am a Front-End Web Developer.</h4>
          </div>
          <button onClick={executeScrollProj} className='hero-btn'>
            Works
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};
export default HeroSection;
