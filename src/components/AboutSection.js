import React from 'react';
import sculpt1 from '../images/sculpt1.png';

const AboutSection = () => {
  return (
    <React.Fragment>
      <section className='about-section'>
        <div className='about-container'>
          <div className='about-img-container'>
            <img src={sculpt1} alt='About-img' />
          </div>
          <div className='about-title-container'>
            <h3 className='about-title'>About Me</h3>
          </div>
          <div className='about-info'>
            <p>
              With an artistic background, I have started my studies as a
              <span>Web Developer</span> to find a real passion.
            </p>
            <br></br>
            <div className='about-info-projects-invite'>
              <p>
                I invite you to see my
                <a href='#projects'> Projects</a>.
              </p>
            </div>

            <button className='about-btn'>
              <a href='#contact'>Let's get in touch</a>
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSection;
