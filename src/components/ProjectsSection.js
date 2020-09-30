import React from 'react';
// Project Images
import AirTribute from '../images/AirTribute.jpg';
import FlixTribute from '../images/FlixTribute.jpg';
import TvSuisse from '../images/TvSuisse.jpg';
import PeruvianChef from '../images/PeruvianChef.jpg';
// Icons
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectsSection = ({ projRef, projRefDesk }) => {
  return (
    <React.Fragment>
      <section className='projects-section' id='projects' ref={projRef}>
        <div className='projects-container' ref={projRefDesk}>
          <div className='contact-title-container'>
            <h2 className='projects-title'>Projects</h2>
          </div>
          <div className='single-projects-container'>
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={PeruvianChef} alt='peruvian-chef' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Peruvian Chef</h3>
                  <p>HTML / CSS / JS</p>
                </div>
                <div className='project-icons-container'>
                  <a href='https://port-peruchef.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/Peruvian-Chef'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </div>
            {/* End Single Project */}
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={TvSuisse} alt='tv-suisse' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Tv Suisse</h3>
                  <p>HTML / CSS / JS</p>
                </div>
                <div className='project-icons-container'>
                  <a href='https://rts-project-clone.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/rts-project'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </div>
            {/* End Single Project */}
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={FlixTribute} alt='Project-Img' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Flix Tribute</h3>
                  <p>React Js</p>
                </div>
                <div className='project-icons-container'>
                  <a href='https://flix-tribute-react.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/FlixTribute'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </div>
            {/* End Single Project */}
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={AirTribute} alt='Project-Img' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Air Tribute</h3>
                  <p>React Js</p>
                </div>
                <div className='project-icons-container'>
                  <a href='https://bnb-tribute-react.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/Air-Tribute'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </div>
            {/* End Single Project */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProjectsSection;
