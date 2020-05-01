import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    showComp: true,
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };

    this.setState({showComp: false});

    axios
      .post('/posts' , data)
      .then((response) => {
        if (response.status === 201) {
          alert("Your data is saved!!");
          this.setState({
            title: "",
            content: "",
            author: "Max",
            showComp: true
          });
        }
      });
  };

  render() {
    let compData = (
        <div className="NewPost">
          <h1>Add a Post</h1>
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
          <label>Content</label>
          <textarea
            rows="4"
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
          <label>Author</label>
          <select
            value={this.state.author}
            onChange={(event) => this.setState({ author: event.target.value })}
          >
            <option value="Max">Max</option>
            <option value="Manu">Manu</option>
          </select>
          <button onClick={this.postDataHandler}>Add Post</button>
        </div>
      );

    if (!this.state.showComp){
        compData = <h2 style={{textAlign: "center"}}>Loading...</h2>
    }
    return compData;
  }
}

export default NewPost;
