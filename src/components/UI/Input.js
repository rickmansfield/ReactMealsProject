import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  console.log('Input.js lin 5 props', props);
  return (
    <div className={classes.Input}>
      <label htmlFor={props.input.id}>
        {props.label}
      </label>
      <input {...props.input} />
    </div>
  )
}

export default Input