import classes from "./Modal.module.css";

import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overLays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHide={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
