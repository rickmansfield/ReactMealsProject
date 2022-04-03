import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
  console.log('Card.js lin 5 props', props);
  console.log('Card.js lin 6 props.children', props.children);
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default Card