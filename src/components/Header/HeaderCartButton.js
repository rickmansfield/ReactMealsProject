import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context.js';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button
      // type={props.type || 'button'}
      className={classes.button}
      onClick={props.onClick}
    // disabled={props.disabled}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
      {/* {props.children} */}
    </button>
  );
};

export default HeaderCartButton;
