import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const auth=localStorage.getItem('token');
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1245) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1245) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
         LOGO
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
         {click?<FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faBars}/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/notes' className='nav-links' onClick={closeMobileMenu}>
              Notes
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/quiz'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Widgets <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link
              to='/community'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Community
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
        {auth? <li>
          <Link
                 to='/profile'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Profile
            </Link>
            <Link
              to='/logout'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Logout
            </Link>
          </li>: <li>
          <Link
                 to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>}  
          </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;