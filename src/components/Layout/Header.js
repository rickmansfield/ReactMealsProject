import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = (props) => {
  return (
  <Fragment>
      <header className={classes.header}>
        <h1>Rick's ReactMeals App!</h1>
        <HeaderCartButton />
    </header>
      <div className={classes['main-image']}>
        <img src={ mealsImage } alt="Table with food"/>
    </div>
  </Fragment>
  )
};

export default Header;
