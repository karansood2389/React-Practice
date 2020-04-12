import React, { Component } from "react";
import classesMod from "./App.module.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import personJSon from "../assets/person.json";
import withClass from "../hoc/withClass";
import Auxillary from "../hoc/Auxillary";
import sapIdGen from "../functiomLibrary/sapIdGen";
import AuthContext from "../context/AuthContext";

class App extends Component {
  constructorMsg = "[App.js] constructor called";

  constructor(props) {
    super(props);
    console.log(this.constructorMsg);
    const personDataWithId = this.sapIdAssign();
    this.state = {
      persons: personDataWithId,
      showPerson: false,
      showCockpit: true,
      counter: 0,
      authenticated: false
    };
    console.log(this.state);
  }

  sapIdAssign = () => {
    const personsObject = [...personJSon.data];

    personsObject.forEach(person => {
      const id = sapIdGen();
      person.id = id;
    });

    return personsObject;
  };

  static getDerivedStateFromProps = (props, state) => {
    const getDerivedStateFromPropsMsg =
      "[App.js] getDerivedStateFromPropsMsg called";
    console.log(getDerivedStateFromPropsMsg, props);
    return state;
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  changeNameHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(person => person.id === id);
    persons[personIndex].name = event.target.value;
    this.setState((prevState, props) => {
      return {
        persons: [...persons],
        counter: prevState.counter + 1
      };
    });
  };

  deletePersonHandler = personId => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(person => person.id === personId);
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  componentDidMount = () => {
    const componentDidMountMsg = "[App.js] componentDidMount called";
    console.log(componentDidMountMsg);
  };

  shouldComponentUpdate(nextProps, nextState) {
    const shouldComponentUpdateMsg = "[App.js] shouldComponentUpdate called";
    console.log(shouldComponentUpdateMsg);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const componentDidUpdateMsg = "[App.js] componentDidUpdate called";
    console.log(componentDidUpdateMsg);
  }

  toggleCockpit = () => {
    const showCockpit = this.state.showCockpit;
    this.setState({
      showCockpit: !showCockpit
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    const renderMsg = "[App.js] render called";

    console.log(renderMsg);

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div className={classesMod.classContainer}>
          <div className={classesMod.classFlex}>
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.changeNameHandler}
              isLogged={this.state.authenticated}
            />
          </div>
        </div>
      );
    }

    return (
      <Auxillary>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {
            <div className={classesMod.position}>
              <button onClick={this.toggleCockpit}>Toggle Cockpit</button>
              {this.state.showCockpit ? (
                <Cockpit
                  title={
                    !!this.props.appTitle ? this.props.appTitle : `Karan's Team`
                  }
                  personsLength={this.state.persons.length}
                  showPerson={this.state.showPerson}
                  clicked={this.togglePersonHandler}
                />
              ) : null}
            </div>
          }
          {<div>{persons}</div>}
        </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default withClass(App, classesMod.App);
