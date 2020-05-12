import React, { Component } from "react";
import { Route } from "react-router-dom";

import Course from "../Course/Course";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  routeHandler = (id, title) => {
    this.props.history.push({
      pathname: this.props.match.url + "/" + id,
      search: "?title=" + title,
    });
  };

  render() {
    return (
      //   <React.Fragment>
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <article
                className="Course"
                onClick={() => {
                  this.routeHandler(course.id, course.title);
                }}
                key={course.id}
              >
                {course.title}
              </article>
            );
          })}
        </section>
        <div className='NestedRoute'>
          <Route
            path={this.props.match.url + "/:id"}
            exact
            component={Course}
          />
        </div>
      </div>
      //   </React.Fragment>
    );
  }
}

export default Courses;
