import React from 'react';

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
          <div className='about-title-container'>
            <h3 className='about-title'>About Me</h3>
          </div>
          <div className='about-info'>
            <p>
              With an artistic background, I have started my studies as a Web
              Developer to find a real passion.
              <br />
              <span className='span-about-nolink'>Tools & Technologies </span>
              <br />
              HTML, CSS, Javascript, React, Gatsby, NPM, Git, Firebase, Material
              UI.
              <br />
              <span className='span-about-nolink'>How will I move on?</span>
              <br />
              PHP - mySQL - MongoDB
            </p>
            <br></br>
            <div className='about-info-projects-invite'>
              <p>
                I invite you to see my
                <span onClick={executeScrollProj} className='span-about'>
                  Projects
                </span>
                .
              </p>
            </div>
            <div className='about-info-projects-invite-desktop'>
              <p>
                I invite you to see my
                <span onClick={executeScrollProjDesktop} className='span-about'>
                  Projects
                </span>
                .
              </p>
            </div>

            <button className='about-btn' onClick={executeScrollCont}>
              Let's get in touch
            </button>
            <button
              className='about-btn-desktop'
              onClick={executeScrollContDesktop}
            >
              Let's get in touch
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSection;
