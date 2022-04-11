import React from 'react';
import CartContext from './card.context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => { };
  const removeItemFromCartHandler = (id) => { };

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return (
    <CartContext.Provider> {props.children} </CartContext.Provider>
  );
}

export default CartProvider;
