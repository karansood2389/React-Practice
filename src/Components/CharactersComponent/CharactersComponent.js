import React from "react";
import CharComponent from "./CharComponent/CharComponent";

import "./CharactersComponent.css";

const CharactersComponent = (props) => {
  const delHandler = (index) => {
    props.removed(index);
  };
  const renderCharComponent = (textString) => {
    return textString.split("").map((char, index) => {
      return (
        <CharComponent
          clicked={() => delHandler(index)}
          key={index}
          character={char}
        />
      );
    });
  };

  const charComponents = props.textString
    ? renderCharComponent(props.textString)
    : null;

  let classGroup = "CharsCompDisp";
  if (charComponents !== null) {
    classGroup = "CharsComp";
  }

  return <div className={classGroup}>{charComponents}</div>;
};

export default CharactersComponent;
