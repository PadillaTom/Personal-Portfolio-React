import React from 'react';
import { ImLinkedin2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { AiFillPhone } from 'react-icons/ai';

const ContactSection = ({ contactRef, contactRefDesk }) => {
  return (
    <React.Fragment>
      <section className='contact-section' id='contact' ref={contactRef}>
        <div className='contact-section-container' ref={contactRefDesk}>
          <div className='contact-title-container'>
            <h2 className='contact-title'>Contact</h2>
            <h6 className='contact-subtitle'>Form, Social Media, Telephone.</h6>
          </div>
          <div className='desktop-contact-container'>
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
                </div>
                <p>PadillaTomasAgustin@gmail.com</p>
                {/* Only Will Display in Desktop Sizes */}
                <div className='contact-social-media-desktop-container'>
                  <a href='https://www.linkedin.com/in/padillatom/'>
                    <ImLinkedin2></ImLinkedin2>
                  </a>
                  <a href='https://github.com/PadillaTom'>
                    <FiGithub></FiGithub>
                  </a>
                </div>
                {/* End Desktop */}
              </div>
            </div>
            <div className='contact-methods-container'>
              {/* Only Will display in Mobile */}
              <div className='contact-social-media-container'>
                <a href='https://www.linkedin.com/in/padillatom/'>
                  <ImLinkedin2></ImLinkedin2>
                </a>
                <a href='https://github.com/PadillaTom'>
                  <FiGithub></FiGithub>
                </a>
              </div>
              {/* End Mobile */}
              <form
                action='https://formspree.io/f/mleodora'
                method='POST'
                className='contact-form'
              >
                <input type='text' name='person' placeholder='Name' />
                <input type='email' name='email' placeholder='Enter email' />
                <textarea
                  name='message'
                  rows='8'
                  placeholder='Your Message'
                ></textarea>
                <button type='submit' value='Send'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactSection;
