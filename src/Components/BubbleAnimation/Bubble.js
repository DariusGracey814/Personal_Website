import React from 'react';

import classes from './Bubble.module.css';

function Bubble({ top, left, color, bubbleStyle }) {
  return (
    <div className={classes[bubbleStyle]} style={{backgroundColor: color, top: top, left:left}}></div>
  );
};

export default Bubble;
