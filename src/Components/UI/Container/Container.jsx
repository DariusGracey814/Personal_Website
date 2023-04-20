import React from 'react';

// Stylesheet
import classes from './Container.module.css';

function Container(props) {
  return (
    <div className={classes.containerMd}>{props.children}</div>
  );
};

export default Container;
