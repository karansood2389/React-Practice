import React, { Component } from "react";

import Auxiliary from "hoc/Auxiliary/Auxiliary";
import Burger from "components/Burger/Burger";
import BuildControls from "components/Burger/BuildControls/BuildControls";
import Modal from "components/UI/Modal/Modal";
import OrderSummary from "components/Burger/OrderSummary/OrderSummary";
import Spinner from "components/UI/Spinner/Spinner";
import withErrorHandler from "hoc/withErrorHandler/withErrorHandler";

import axios from "axiosOrders";

import CONSTANTS from "constant/Constant";

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseAble: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);

    this.setState({ purchaseAble: sum > 0 });
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = CONSTANTS.INDGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = CONSTANTS.INDGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const orders = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: "Karan Sood",
        address: {
          street: "Test Street",
          zipCode: 230445,
          country: "India",
        },
        email: "cool.karan0172@gmail.com",
      },
      dilveryMethod: "fastest",
    };
    axios
      .post("/order.json", orders)
      .then((response) => {
        console.log(response);
        this.setState({ purchasing: false, loading: false });
      })
      .catch((error) => {
        this.setState({ purchasing: false, loading: false });
        console.log(error);
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <h1 style={{ textAlign: "center", color: "red", marginTop: "200px" }}>
        Ingredients can't be loaded !!!
      </h1>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientRemoved={this.removeIngredientHandler}
            ingredientAdded={this.addIngredientHandler}
            disabled={disabledInfo}
            totalPrice={this.state.totalPrice}
            ordered={this.purchaseHandler}
            purchaseAble={this.state.purchaseAble}
          />
        </Auxiliary>
      );

      orderSummary = (
        <OrderSummary
          purschaseContinued={this.purchaseContinueHandler}
          purchaseCancelled={this.purchaseCancelHandler}
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          load={this.state.loading}
          closedModal={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
