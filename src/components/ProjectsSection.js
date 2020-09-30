import React from 'react';
// Project Images
import lamps from '../images/lamps.jpg';
// Icons
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectsSection = () => {
  return (
    <React.Fragment>
      <section className='projects-section'>
        <div className='projects-container'>
          <div className='contact-title-container'>
            <h2 className='projects-title'>Projects</h2>
          </div>
          <div className='single-projects-container'>
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={lamps} alt='Project-Img' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Titulo</h3>
                  <p>HTML / CSS / JS</p>
                </div>
                <div className='project-icons-container'>
                  <HiOutlineExternalLink></HiOutlineExternalLink>
                  <FiGithub></FiGithub>
                </div>
              </div>
            </div>
            {/* End Single Project */}
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={lamps} alt='Project-Img' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Titulo</h3>
                  <p>HTML / CSS / JS</p>
                </div>
                <div className='project-icons-container'>
                  <HiOutlineExternalLink></HiOutlineExternalLink>
                  <FiGithub></FiGithub>
                </div>
              </div>
            </div>
            {/* End Single Project */}
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={lamps} alt='Project-Img' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Titulo</h3>
                  <p>HTML / CSS / JS</p>
                </div>
                <div className='project-icons-container'>
                  <HiOutlineExternalLink></HiOutlineExternalLink>
                  <FiGithub></FiGithub>
                </div>
              </div>
            </div>
            {/* End Single Project */}
            {/* Single Project */}
            <div className='single-project-container'>
              <img src={lamps} alt='Project-Img' />
              <div className='project-info-container'>
                <div className='project-text-container'>
                  <h3>Titulo</h3>
                  <p>HTML / CSS / JS</p>
                </div>
                <div className='project-icons-container'>
                  <HiOutlineExternalLink></HiOutlineExternalLink>
                  <FiGithub></FiGithub>
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
