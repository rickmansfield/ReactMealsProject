import React, { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../Assets/meals.jpg';

const Header = (props) => {
  return (
  <Fragment>
      <header className={classes.header}>
        <h1>Rick's ReactMeals App!</h1>
        <HeaderCartButton onClick={ props.onShowCart }/>
    </header>
      <div className={classes['main-image']}>
        <img src={ mealsImage } alt="Table with food"/>
    </div>
  </Fragment>
  )
};

export default Header;
