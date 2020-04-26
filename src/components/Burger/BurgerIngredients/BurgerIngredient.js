import React from "react";
import PropTypes from "prop-types";

import BurgerClass from "components/Burger/BurgerIngredients/BurgerIngredient.module.css";

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {

    case "bread-bottom":
      ingredient = <div className={BurgerClass.BreadBottom}></div>;
      break;

    case "bread-top":
      ingredient = (
        <div className={BurgerClass.BreadTop}>
          <div className={BurgerClass.Seeds1}></div>
          <div className={BurgerClass.Seeds2}></div>
        </div>
      );
      break;

    case "meat":
      ingredient = <div className={BurgerClass.Meat}></div>;
      break;

    case "cheese":
      ingredient = <div className={BurgerClass.Cheese}></div>;
      break;

    case "salad":
      ingredient = <div className={BurgerClass.Salad}></div>;
      break;

    case "bacon":
      ingredient = <div className={BurgerClass.Bacon}></div>;
      break;

    default:
      ingredient = null;

  }

  return ingredient;
  
};

burgerIngredient.protoTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
