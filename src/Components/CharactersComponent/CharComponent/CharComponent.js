import React from "react";
import "./CharComponent.css";

const CharComponent = (props) => {
  const dispChar = props.character === " " ? "space" : props.character;
  return (
    <div className="CharsCompnent" onClick={props.clicked}>
      {dispChar}
    </div>
  );
};

export default CharComponent;
