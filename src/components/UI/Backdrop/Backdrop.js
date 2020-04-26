import React from "react";

import classes from "components/UI/Backdrop/Backdrop.module.css";

const backDrop = (props) => {
  return props.show ? <div className={classes.BackDrop} onClick={props.clicked}></div> : null;
};

export default backDrop;
