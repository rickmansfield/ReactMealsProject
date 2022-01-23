import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import Button from '../Layout/HeaderCartButton';

const Header = (props) => {
  return (
  <Fragment>
      <header className={classes.header}>
        <h1>Rick's ReactMeals App</h1>
        <Button>Cart</Button>
    </header>
      <div className={classes['main-image']}>
        <img src={ mealsImage } alt="Table with food"/>
    </div>
  </Fragment>
  )
};

export default Header;
