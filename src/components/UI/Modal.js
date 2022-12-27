import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.content}>{props.children}</div>
      <button className={classes.closeBtn} onClick={props.onClick}>
        Close
      </button>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.hideModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.hideModal}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
