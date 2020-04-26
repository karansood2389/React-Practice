import React from "react";

import classes from "components/UI/Button/Button.module.css"

const button = (props) => {
    return(
        <button onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')}>
            {props.children}
        </button>
    )
}

export default button;