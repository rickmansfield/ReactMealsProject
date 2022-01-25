import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  return (
    <button
      // type={props.type || 'button'}
      className={classes.button}
      // onClick={props.onClick}
      // disabled={props.disabled}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={ classes.badge }>
        3
      </span>
      {/* {props.children} */}
    </button> 
  );
};

export default HeaderCartButton;
