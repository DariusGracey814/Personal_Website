import React from 'react';

// Components
import Navbar from '../Navbar/Navbar';

// Stylesheet
import classes from './Header.module.css';

function Header({ heroIntersecting, setShow, about, skills, work, contact }) {
  return (
    <header className={`${classes.header} ${!heroIntersecting ? classes.fixed : null}`}><Navbar setShow={setShow} work={work} about={about} skills={skills} contact={contact} /></header>
  );
};

export default Header;
