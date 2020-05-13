import React from "react";

import classes from "./UserInput.module.css";

const UserInput = (props) => {
  return (
    <div className={classes.UserInput}>
      <label>User Input: </label>
      <input
        type="text"
        onChange={props.userInputValue}
        value={props.defaultUserName}
      />
    </div>
  );
};

export default UserInput;
