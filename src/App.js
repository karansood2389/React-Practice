import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Error from "./components/error/error";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/Users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/Courses">Courses</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="Route">
          <Switch>
            <Route path="/Users" exact component={Users} />
            <Route path="/Courses" component={Courses} />
            <Redirect path="/" exact to="/Users" />
            <Redirect path="/all-courses" to="/Courses" />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
