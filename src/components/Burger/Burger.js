import React from "react";

import BurgerCSS from "components/Burger/Burger.module.css";
import BurgerIngredient from "components/Burger/BurgerIngredients/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, ele) => arr.concat(ele), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding the ingredients!</p>;
  }

  return (
    <div className={BurgerCSS.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
