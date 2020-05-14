import React from "react";

import "./ValidationComponent.css";

const ValidationComponent = (props) => {
  const classGroup = ["ValidationComponent", "shortColor"];
  const lengthFlag = props.length < 5;
  const message = lengthFlag ? "Text is too short" : "Text is long enough";
  const showFlag = props.length !== 0 || props.blurValue;

  if (!lengthFlag) {
    classGroup.pop();
  } else if (props.blurValue) {
    classGroup.push("keyCheck");
  }
  return (
    <div>
      {showFlag ? <h3 className={classGroup.join(" ")}>{message}</h3> : null}{" "}
    </div>
  );
};

export default ValidationComponent;
