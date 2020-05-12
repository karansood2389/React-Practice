import React, { Component } from "react";

class Course extends Component {
  state = {
    title: null,
    id: null,
  };

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.loadComponentQuery();
    }
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadComponent();
    }
  };

  loadComponentQuery = () => {
    let queryArray;
    const query = new URLSearchParams(this.props.location.search);
    for (let params of query.entries()) {
      queryArray = params;
    }
    this.loadComponent(queryArray[1]);
  };

  loadComponent = (val) => {
    const id = this.props.match.params.id;
    const queryParamTitle = val
      ? val
      : this.parseQueryString(this.props.location.search);
    this.setState({
      title: queryParamTitle,
      id: id,
    });
  };

  parseQueryString = (str) => {
    const n = 7;
    const qs = str.slice(n).replace(/%20/g, " ");
    return qs;
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.state.id}</p>
      </div>
    );
  }
}

export default Course;
