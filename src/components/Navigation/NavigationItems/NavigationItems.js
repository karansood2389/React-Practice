import React from "react";

import classes from "components/Navigation/NavigationItems/NavigationItems.module.css";

import NavigationItem from "components/Navigation/NavigationItems/NavigationItem/NavigationItem"

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;