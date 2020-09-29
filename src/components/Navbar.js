import React, { useState } from 'react';

// React Icons:
import { AiOutlineMenu } from 'react-icons/ai';
// Sidebar Icons:
import { ImLinkedin2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

// Main:
const Navbar = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
          <div className='sidebar-close-btn'>
            <AiOutlineClose onClick={() => setIsOpen(!isOpen)}></AiOutlineClose>
          </div>
          <ul className='sidebar-links'>
            <li>
              <a href='/'> Home</a>
            </li>
            <li>
              <a href='/'> About </a>
            </li>
            <li>
              <a href='/'> Projects </a>
            </li>
            <li>
              <a href='/'> Contact </a>
            </li>
          </ul>
          <div className='sidebar-social-icons'>
            <ImLinkedin2></ImLinkedin2>
            <FiGithub></FiGithub>
            <SiGmail></SiGmail>
            <MdPhoneIphone></MdPhoneIphone>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
