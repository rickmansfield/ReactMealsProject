import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
function Cart(props) {
  const cartItems =
    <ul className={classes['cart-items']}>{
      [
        {
          Id: '1',
          Name: 'Chicken',
          Price: 10.99,
          Amount: 2
        },
      ].map((item) => <li>{item.name}</li>)
    }</ul>;
  return (

    <Modal>
      {cartItems}
      <div>
        <span>Total Amount:</span>
        <span>$10.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart