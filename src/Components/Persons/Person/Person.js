import React, { Component } from "react";
import style from "./Person.module.css";
import Auxillary from "../../../hoc/Auxillary";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/AuthContext"

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
    // console.log(this.inputElementRef);
    // this.inputElement.focus();
  }
  render() {
    const personMsg = "[Person.js] rendering......";
    console.log(personMsg);
    return (
      <Auxillary>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log In........</p>}
        <p>
          Hi I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          // ref={(inputEle) => {this.inputElement = inputEle}}
          onChange={this.props.change}
          value={this.props.name}
        />
        <button onClick={this.props.click}>Delete Person</button>
      </Auxillary>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.string,
  click: PropTypes.func,
  changed: PropTypes.func
};

export default withClass(Person, style.Person);
