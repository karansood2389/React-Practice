import React from "react";

import BackDrop from "components/UI/Backdrop/Backdrop";
import Auxiliary from "hoc/Auxiliary/Auxiliary";

import classes from "components/UI/Modal/Modal.module.css";

const Modal = (props) => {

  return (
    <Auxiliary>
      <BackDrop show={props.show} clicked={props.closedModal} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.show === nextProps.show && prevProps.children === nextProps.children
}

export default React.memo(Modal, areEqual);
