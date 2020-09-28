// import React, { Component } from "react";
import React from "react";
import pict_mountain from "../img/landscape_mountain_resize.jpg";
//   background-image: url("../img/landscape_mountain_resize.jpg");
// import { Button, Form, Col } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import Input from "./form-input";

class Ressources extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", focus: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="contactus">
        <div className="contactus-head">
          <div className="contactus-pict-mountain">
            <img src={pict_mountain} alt="mountain" />
          </div>
          <div className="contactus-title">
            {/* <h1>Know Some Water Facts</h1> */}
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="contactus-form">
          <form onSubmit={this.handleSubmit}>
            <Input id={1} name="name" label="Your Name..." />

            <Input id={2} name="lastname" label="Your Last Name..." />
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Ressources;
