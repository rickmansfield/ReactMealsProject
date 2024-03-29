import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';


const MealItem = (props) => {
  // console.log('MealItem.js lin 6 props', props);
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => { 
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    });
  };



  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={classes.description}>
          {props.description}
        </div>

        <div className={classes.price}>
          {price}
        </div>
      </div>

      <div>
        {/* <button onClick={props.onClick}>Add to Cart</button> */}
        <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
      </div>

    </li>
  );
};

export default MealItem