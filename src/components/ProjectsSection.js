import React from 'react';
// Project Images
import AirTribute from '../images/AirTribute.jpg';
import FlixTribute from '../images/FlixTribute.jpg';
import TvSuisse from '../images/TvSuisse.jpg';
import PeruvianChef from '../images/PeruvianChef.jpg';
import Nyus from '../images/Nyus.jpg';
import Buona from '../images/BuonaPizza.jpg';
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
                <h2>Buona Pizza</h2>
              </div>
              <img src={Buona} alt='BuonaPizza' />
              <div className='new-single-info'>
                <h4>React Js / Context API / Firebase </h4>
                <p>
                  Fantasy Pizzeria website allowing users to Login / Logout and
                  Add items to the Cart.
                </p>
                <div className='new-single-icons'>
                  <a href='https://buona-zapi.netlify.app/'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/Buona-Pizza'>
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
                <h2>Flix Tribute</h2>
              </div>
              <img src={FlixTribute} alt='Flix Tribute' />
              <div className='new-single-info'>
                <h4>React / TMDB Api / Axios / React MovieTrailer</h4>
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
            {/* Single Project */}
            <article className='new-single'>
              <div className='new-single-title'>
                <h2>Air Tribute</h2>
              </div>
              <img src={AirTribute} alt='Air Tribute' />
              <div className='new-single-info'>
                <h4>
                  React Js / React Router Dom / Axios / Material UI / React
                  DateRange
                </h4>
                <p>Tribute to a well known company, fully Responsive.</p>
                <div className='new-single-icons'>
                  <a href='https://bnb-tribute-react.netlify.app'>
                    <HiOutlineExternalLink></HiOutlineExternalLink>
                  </a>
                  <a href='https://github.com/PadillaTom/Air-Tribute'>
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
