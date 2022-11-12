import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      
    </div>
  )
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
    <div className={`${classes.content}`}>{props.children}</div>
  </div>
};

//Note that we are using React.Fragment here to avoid adding an extra div to the DOM. If we don't use React.Fragment, then we will have an extra div in the DOM. You can use <React.Fragment> or import { Fragment} and use the shorter verison <Fragment> you can use a <div> as well. But remember if you wrap the content in a div, then you will have an extra div in the DOM. So, it's better to use React.Fragment or <Fragment> to avoid adding an extra div to the DOM.
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
};

export default Modal
