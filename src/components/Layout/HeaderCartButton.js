import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  return (
    <button
      // type={props.type || 'button'}
      // className={`${classes.button} ${props.className}`}
      // onClick={props.onClick}
      // disabled={props.disabled}
    >
      <span>
        <CartIcon />
      </span>
      <span></span>
      <span></span>
      {props.children}
    </button> 
  );
};

export default HeaderCartButton;
