import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import FullPost from "../FullPost/FullPost";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Karan",
          };
        });
        this.setState({
          posts: updatedPosts,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  postSelectedHandler = (id) => {
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/posts/" + id });
    // this.props.history.push('/'+id);
  };

  render() {
    let posts = <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    // ( <h2 style={{ textAlign: "center" }}>Something Went Wrong!!!</h2>);
    // if (!this.state.errorLog) {
    if (this.state.posts.length > 0) {
      posts = this.state.posts.map((post) => {
        return (
          //   <Link key={post.id} to={"/" + post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => {
              this.postSelectedHandler(post.id);
            }}
          />
          //   </Link>
        );
      });
    }
    return (
      <div>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

export default Posts;
