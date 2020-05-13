import React from "react";

import classes from "./UserOutput.module.css";

const UserOutput = (props) => {
  return (
    <div className={classes.UserOutput}>
      <p>My name is {props.userName}</p>
      <p>
        {props.userName}'s age: {props.userAge}
      </p>
    </div>
  );
};

export default UserOutput;
