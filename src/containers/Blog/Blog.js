import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// , Redirect
import Posts from "./Posts/Posts";
import asyncComponent from  "../../hoc/asyncComponent"; 

import "./Blog.css";
// import NewPost from "./NewPost/NewPost";
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost')
});


class Blog extends Component {
  state = {
    auth: false,
  };
  
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName="my-active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
              <li>
                <button
                  style={this.state.auth ? { color: "green" } : null}
                  onClick={() => {
                    this.setState({ auth: true });
                  }}
                >
                  Authorize
                </button>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={()=><h1>Home</h1>}/>
        <Route path='/new-post' render={()=><h1>New Post</h1>}/> */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route
            render={() => {
              return (
                <h1
                  style={{
                    textAlign: "center",
                    color: "red",
                    marginTop: "100px",
                  }}
                >
                  Route Not defined!!!
                </h1>
              );
            }}
          />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
