import React from 'react';

export default function OldWayProjects() {
  return (
    <div>
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
            <p>React Js / TMDB API</p>
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
            <p>React Js / React Router Dom / Axios</p>
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
      {/* Single Project */}
      <div className='single-project-container'>
        <img src={Nyus} alt='Project-Img' />
        <div className='project-info-container'>
          <div className='project-text-container'>
            <h3>Nyu's Mixologie</h3>
            <p>React Js / React Router Dom / Context API / Firebase </p>
          </div>
          <div className='project-icons-container'>
            <a href='https://nyus.netlify.app/'>
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
  );
}