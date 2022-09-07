import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import { scrollToSection } from '../../../global';

// Components
import { scrollTop } from '../../../Utils/utils';
import ContainerMd from '../Container/Container';

// Stylesheets
import classes from './Navbar.module.css';

// Logo image
import logo from '../../../Assets/Dark1.png';

function Navbar({ setShow, about, skills, work, contact }) {
  const [navActive, setNavActive] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const menuNavigation = (evt) => {
    evt.preventDefault();
    setNavActive((prevState) => !prevState);
    setShow((prevState) => !prevState);
    setAriaExpanded((prevState) => !prevState);
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.offsetTop,
        behavior: "smooth"
    });

    setNavActive((prevState) => !prevState);
    setAriaExpanded((prevState) => !prevState);
    setShow((prevState) => !prevState);
  };

  return (
   <ContainerMd>
         <nav className={classes.nav}>
            {/* Logo */}
            <div className={classes['logo-wrapper']} onClick={scrollTop
            }>
               <Link to="/home">
                    <img className={classes.logo} src={logo} alt="Darius Gracey logo" />
               </Link>
            </div>

            {/* Mobile Menu */}
            <button className={`${classes['menuBtn']} ${!navActive ? null : classes.show}`} aria-controls="navMenu" aria-expanded={ariaExpanded} aria-label="mobile menu" onClick={menuNavigation} >
                {!navActive ? <i className={`fa-solid fa-bars ${classes.menu}`}></i> :
                <i className={`fa-solid fa-xmark ${classes.close}`}></i>
                }                   
            </button>


            <ul id='navMenu' className={`${classes.navMenu} ${!navActive ? null : classes.show}`}>
                <li>
                  <button className={classes.link} role="link" onClick={() => scrollToSection(work)} aria-label="portfolio navigation link">Work</button>
                </li>

                <li>
                  <button className={classes.link} role="link" onClick={() => scrollToSection(skills)} aria-label="skills navigation link">Skills</button>
                </li>

                <li>
                  <button className={classes.link} role="link" onClick={() => scrollToSection(about)}  aria-label="about navigation link">About</button>
                </li>

                <li>
                  <button className={classes.link} aria-label="contact navigation link" role="link" onClick={() => scrollToSection(contact)}>Contact</button>
                </li>
            </ul>
        </nav>
   </ContainerMd>
  );
};

export default Navbar;
