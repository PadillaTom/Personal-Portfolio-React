import React from 'react';
import { ImLinkedin2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

import { AiFillPhone } from 'react-icons/ai';

const ContactSection = () => {
  return (
    <React.Fragment>
      <section className='contact-section'>
        <div className='contact-section-container'>
          <div className='contact-title-container'>
            <h2 className='contact-title'>Contact</h2>
            <h6 className='contact-subtitle'>Form, Social Media, Telephone.</h6>
          </div>
          <div className='contact-written-info-container'>
            <div className='contact-written-info'>
              <div className='contact-written-icon'>
                <AiFillPhone></AiFillPhone>
              </div>
              <p> +41 79 400 26 93</p>
            </div>
            <div className='contact-written-info'>
              <div className='contact-written-icon'>
                <SiGmail></SiGmail>
              </div>{' '}
              <p>PadillaTomasAgustin@gmail.com</p>
            </div>
          </div>
          <div className='contact-methods-container'>
            <div className='contact-social-media-container'>
              <a href='https://www.linkedin.com/in/padillatom/'>
                <ImLinkedin2></ImLinkedin2>
              </a>
              <a href='https://github.com/PadillaTom'>
                <FiGithub></FiGithub>
              </a>
            </div>
            <form className='contact-form'>
              <input type='text' name='person' placeholder='Name' />
              <input type='email' name='email' placeholder='Enter email' />
              <textarea
                name='message'
                rows='8'
                placeholder='Your Message'
              ></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactSection;
