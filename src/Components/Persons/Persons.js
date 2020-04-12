import React, { PureComponent } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   const getDerivedStateFromPropsMsg = '[Persons.js] getDerivedStateFromProps called'
  //   console.log(getDerivedStateFromPropsMsg)
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const shouldComponentUpdateMsg = '[Persons.js] shouldComponentUpdate called';
  //   console.log(shouldComponentUpdateMsg);
  //   if (nextProps.persons === this.props.persons) {
  //     return false;
  //   }
  //   return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const getSnapshotBeforeUpdateMsg = '[Persons.js] getSnapshotBeforeUpdate called';
    console.log(getSnapshotBeforeUpdateMsg);
    return {msg:'Snapshot transferred'};
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    const componentDidUpdateMsg = '[Persons.js] componentDidUpdateMsg called';
    console.log(componentDidUpdateMsg, '; Sanpshot Msg Object: ', snapshot);
  }

  componentWillUnmount() {
    const componentWillUnmountMsg = '[Persons.js] componentWillUnmount called';
    console.log(componentWillUnmountMsg);
  }

  render() {
    const personsMsg = "[Persons.js] rendering....";
    console.log(personsMsg);
    return this.props.persons.map((person, index) => (
      <ErrorBoundary key={person.id}>
        <Person
          click={() => this.props.clicked(person.id)}
          name={person.name}
          age={person.age}
          change={event => this.props.changed(event, person.id)}
          isAuth={this.props.isLogged}
        >
          {person.description}
        </Person>
      </ErrorBoundary>
    ));
  }
}

export default Persons;
