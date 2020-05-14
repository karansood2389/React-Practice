import React from "react";

import "./InputComponent.css";

const InputComponent = (props) => {
  return (
    <div className="InputComponent">
      <label>Input Character:</label>
      <input type="text" value={props.changedValue} onBlur={() => props.blur(true)} onChange={(event) => props.change(event)} />
    </div>
  );
};

export default InputComponent;
