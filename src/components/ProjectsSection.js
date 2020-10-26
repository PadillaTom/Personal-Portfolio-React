import React from 'react';
// Project Images

import FlixTribute from '../images/FlixTribute.jpg';
import TvSuisse from '../images/TvSuisse.jpg';
import PeruvianChef from '../images/PeruvianChef.jpg';
import Nyus from '../images/Nyus.jpg';
import Nasa from '../images/NasaAPI.jpg';

import Music from '../images/MusicStore.jpg';
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
            <article className='new-single'>
              <div className='new-single-title'>
                <h2>Peruvian Chef</h2>
              </div>
              <img src={PeruvianChef} alt='peruvian-chef' />
              <div className='new-single-info'>
                <h4>HTML / CSS / JS</h4>
                <p>
                  Static website applying Flexbox and Grids. 100% Responsive.
                </p>
                <div className='new-single-icons'>
                  <a href='https://port-peruchef.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/Peruvian-Chef'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </article>
            {/* End Single Project */}
            {/* Single Project */}
            <article className='new-single'>
              <div className='new-single-title'>
                <h2>RTS Tribute</h2>
              </div>
              <img src={TvSuisse} alt='RTS' />
              <div className='new-single-info'>
                <h4>HTML / CSS / JS</h4>
                <p>
                  Static website applying Flexbox and Grids. Tribute to the
                  Swiss Radio and Television. 100% Responsive
                </p>
                <div className='new-single-icons'>
                  <a href='https://rts-project-clone.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/rts-project'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </article>
            {/* End Single Project */}
            {/* Single Project */}
            <article className='new-single'>
              <div className='new-single-title'>
                <h2>Music Store</h2>
              </div>
              <img src={Music} alt='MusicStore' />
              <div className='new-single-info'>
                <h4>React Js / Context API / Firebase </h4>
                <p>
                  Online Music Store website, 100% responsive, with user
                  Authentication and Shopping Cart.
                </p>
                <div className='new-single-icons'>
                  <a href='https://music-store-geneva.netlify.app/'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/MusicStore'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </article>
            {/* End Single Project */}
            {/* Single Project */}
            <article className='new-single'>
              <div className='new-single-title'>
                <h2>Nyu's Mixology</h2>
              </div>
              <img src={Nyus} alt='Nyus' />
              <div className='new-single-info'>
                <h4>React Js / Context API / Firebase</h4>
                <p>
                  Website made for a Bartender's Company. Fully responsive.
                  Requesting Data stored in Firebase.
                </p>
                <div className='new-single-icons'>
                  <a href='https://nyus.netlify.app/'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                </div>
              </div>
            </article>
            {/* End Single Project */}
            {/* Single Project */}
            <article className='new-single'>
              <div className='new-single-title'>
                <h2>NASA API</h2>
              </div>
              <img src={Nasa} alt='Nasa API' />
              <div className='new-single-info'>
                <h4>React / Nasa API </h4>
                <p>
                  Website using the Nasa API to fetch APOD and MARS Rover
                  Photos.
                </p>
                <div className='new-single-icons'>
                  <a href='https://nasa-fun-api.netlify.app/'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/Nasa-Fun-React'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </article>
            {/* End Single Project */}
            {/* Single Project */}
            <article className='new-single'>
              <div className='new-single-title'>
                <h2>Flix Tribute</h2>
              </div>
              <img src={FlixTribute} alt='Flix Tribute' />
              <div className='new-single-info'>
                <h4>React / TMDB Api / React MovieTrailer</h4>
                <p>
                  Responsive Website requesting to The Movie Database API.
                  Accessing data and displaying as needed.
                </p>
                <div className='new-single-icons'>
                  <a href='https://flix-tribute-react.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/FlixTribute'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
              </div>
            </article>
            {/* End Single Project */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProjectsSection;
