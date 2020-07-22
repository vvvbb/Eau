import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      //   description: "The content of a textarea goes in the value attribute",
    };
  }

  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    let header = "";
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = "";
    }
    return (
      <form>
        {header}
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={this.myChangeHandler}
          //   value={this.state.description}
        />
      </form>
    );
  }
}

export default MyForm;
