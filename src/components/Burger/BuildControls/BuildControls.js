import React from "react";

import BuildControl from "components/Burger/BuildControls/BuildControl/BuildControl";

import classes from "components/Burger/BuildControls/BuildControls.module.css";

import CONSTANTS from "constant/Constant";

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price:<strong> ${props.totalPrice.toFixed(2)}</strong>
    </p>
    {CONSTANTS.INNGREDIENT_CONTROL.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseAble}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
