import React, { useState } from 'react';

// React Icons:
import { AiOutlineMenu } from 'react-icons/ai';
// Sidebar Icons:
import { ImLinkedin2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

// Main:
const Navbar = ({
  executeScrollProj,
  executeScrollCont,
  executeScrollAbout,
  executeScrollHome,
  executeScrollProjMinus,
  executeScrollContMinus,
  executeScrollAboutMinus,
  executeScrollHomeMinus,
}) => {
  //State
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>Tomas Padilla</div>
        <div className='menu-sidebar-open-btn'>
          <AiOutlineMenu onClick={() => setIsOpen(!isOpen)}></AiOutlineMenu>
        </div>
        {/* Navbar Desktop */}
        <ul className='navbar-links'>
          <li onClick={executeScrollHomeMinus}>Home</li>
          <li onClick={executeScrollAboutMinus}>About</li>
          <li onClick={executeScrollProjMinus}>Projects</li>
          <li onClick={executeScrollContMinus}>Contact</li>
        </ul>
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
          <div className='sidebar-close-btn'>
            <AiOutlineClose onClick={() => setIsOpen(!isOpen)}></AiOutlineClose>
          </div>
          <ul className='sidebar-links' onClick={() => setIsOpen(!isOpen)}>
            <li onClick={executeScrollHome}>Home</li>
            <li onClick={executeScrollAbout}>About</li>
            <li onClick={executeScrollProj}>Projects</li>
            <li onClick={executeScrollCont}>Contact</li>
          </ul>
          <div className='sidebar-social-icons'>
            <a href='https://www.linkedin.com/in/padillatom/'>
              <ImLinkedin2></ImLinkedin2>
            </a>
            <a href='https://github.com/PadillaTom'>
              <FiGithub></FiGithub>
            </a>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
