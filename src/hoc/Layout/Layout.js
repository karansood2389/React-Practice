import React, { Component } from "react";

import Auxiliary from "hoc/Auxiliary/Auxiliary";
import Toolbar from "components/Navigation/Toolbar/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer/SideDrawer";

import classes from "hoc/Layout/Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggledHandler = () => {
    this.setState({ showSideDrawer: true});
  }

  render() {
    return (
      <Auxiliary>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <Toolbar drawerToggleClicked={this.sideDrawerToggledHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
