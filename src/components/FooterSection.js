import React from 'react';
import { ImLinkedin2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
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
          <SiGmail></SiGmail>
          <MdPhoneIphone></MdPhoneIphone>
        </div>
        <div className='footer-info'>
          <p>
            Tomas Padilla <AiOutlineCopyright></AiOutlineCopyright> 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
