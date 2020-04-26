import React from "react";

import classes from "components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
