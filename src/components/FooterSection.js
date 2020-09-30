import React from 'react';
import { ImLinkedin2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineCopyright } from 'react-icons/ai';

const FooterSection = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <div className='footer-social-icons'>
          <a href='https://www.linkedin.com/in/padillatom/'>
            <ImLinkedin2></ImLinkedin2>
          </a>
          <a href='https://github.com/PadillaTom'>
            <FiGithub></FiGithub>
          </a>
        </div>
        <div className='footer-info'>
          <p>
            Tomas Padilla <AiOutlineCopyright></AiOutlineCopyright> 2020
          </p>
          <h6>+41 79 400 26 93</h6>
          <h6>PadillaTomasAgustin@gmail.com</h6>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
