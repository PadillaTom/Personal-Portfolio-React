import React from 'react';
import sculpt1 from '../images/sculpt1.png';

const AboutSection = ({
  executeScrollProj,
  executeScrollCont,
  aboutRef,
  executeScrollContDesktop,
  executeScrollProjDesktop,
}) => {
  return (
    <React.Fragment>
      <section className='about-section' id='about' ref={aboutRef}>
        <div className='about-container'>
          <div className='about-img-container'>
            <img src={sculpt1} alt='About-img' />
          </div>
          <div className='about-title-container'>
            <h3 className='about-title'>About Me</h3>
          </div>
          <div className='about-info'>
            <p>
              With an artistic background, I have started my studies as a Web
              Developer to find a real passion.
            </p>
            <br></br>
            <div className='about-info-projects-invite'>
              <p>
                I invite you to see my
                <span onClick={executeScrollProj}> Projects</span>.
              </p>
            </div>
            <div className='about-info-projects-invite-desktop'>
              <p>
                I invite you to see my
                <span onClick={executeScrollProjDesktop}> Projects</span>.
              </p>
            </div>

            <button className='about-btn' onClick={executeScrollCont}>
              Let's get in touch
            </button>
            <button
              className='about-btn-desktop'
              onClick={executeScrollContDesktop}
            >
              {' '}
              Let's get in touch
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSection;
