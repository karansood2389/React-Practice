import React from "react";

import classes from "components/Navigation/SideDrawer/SideDrawer.module.css";

import Logo from "components/Logo/Logo";
import NavigationItems from "components/Navigation/NavigationItems/NavigationItems";
import BackDrop from "components/UI/Backdrop/Backdrop";
import Auxiliary from "hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxiliary>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
