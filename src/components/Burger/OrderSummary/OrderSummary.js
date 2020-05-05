import React from "react";

import Auxiliary from "hoc/Auxiliary/Auxiliary";
import Button from "components/UI/Button/Button";

import CONSTANTS from "constant/Constant";

const OrderSummary = (props) => {

  const ingredientSummary = [];
  for (const igKey in props.ingredients) {
    if (props.ingredients.hasOwnProperty(igKey)) {
      ingredientSummary.push(
        <li key={igKey}>
          <span style={{ textTransform: CONSTANTS.CAPTALIZE_ORDER_SUMMARY }}>
            {igKey}
          </span>
          :{props.ingredients[igKey]}
        </li>
      );
    }
  }

  return (
    <Auxiliary>
      <Button
        btnType={CONSTANTS.CROSS_BUTTON}
        clicked={props.purchaseCancelled}
      >
        X
      </Button>
      <h2>Your Order</h2>
      <p>A delicious burger with following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout ?</p>
      <Button
        btnType={CONSTANTS.DANGER_BUTTON}
        clicked={props.purchaseCancelled}
      >
        Cancel
      </Button>
      <Button
        btnType={CONSTANTS.SUCCESS_BUTTON}
        clicked={props.purschaseContinued}
      >
        Continue
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
