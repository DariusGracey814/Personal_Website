import React from 'react';

import { scrollTop } from '../../Utils/utils';
import classes from './ScrollTopButton.module.css';

function ScrollTopButton({ heroIntersecting }) {
    
  return (
    <button className={`${classes['scroll-btn']} ${!heroIntersecting ? classes.show : null}`} type='button' onClick={scrollTop}>
        <i className={`fa-solid fa-circle-chevron-up ${classes.icon}`}></i>
    </button>
  );
};

export default ScrollTopButton;
