import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {
  console.log('MealItem.js lin 6 props', props);
  const price = `$${props.price.toFixed(2)}`;
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
        <MealItemForm />
      </div>

    </li>
  );
};

export default MealItem