import React, { Component } from "react";

import InputComponent from "./Components/InputComponent/InputComponent";
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";

import "./App.css";
import CharactersComponent from "./Components/CharactersComponent/CharactersComponent";

import image from "./assets/logo.jpg"

class App extends Component {
  state = {
    length: 0,
    string: "",
    blurValue: false
  };

  changeLengthHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      string: event.target.value,
    });
  };

  removeHandler = (index) => {
    const string = this.state.string;
    let stringArray = string.split("");
    stringArray.splice(index, 1);
    let splicedString = stringArray.join("");
    this.setState({ length: splicedString.length, string: splicedString });
  };

  blurHandler = (val) => {
    console.log(val);
    this.setState({blurValue: val});
  }

  render() {
    return (
      <div>
        <header className='header'>
          <div className='image'><img src={image} width='40' height='40'/></div>
          <div className='name'>React Assignment 3</div>
          <div className='user'>Made by Karan</div>
        </header>
        <section>
          <div className="App">
            <div className="textBlock">
              <InputComponent
                blur={this.blurHandler}
                changedValue={this.state.string}
                change={this.changeLengthHandler}
              />
              <p className="lengthText">
                Length of the entered Character: {this.state.length}
              </p>
            </div>
            <p className="enteredText">Entered Text: {this.state.string}</p>
            <div>
              <ValidationComponent blurValue={this.state.blurValue} length={this.state.length} />
            </div>
            <div>
              <CharactersComponent
                removed={(index) => this.removeHandler(index)}
                textString={this.state.string}
              />
            </div>
          </div>
        </section>
        <footer className='footer'>Copyrights reserved.</footer>
      </div>
    );
  }
}

export default App;
