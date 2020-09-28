// import React, { Component } from "react";
import React from "react";
// import pict_mountain from "../img/landscape_mountain_resize.jpg";
//   background-image: url("../img/landscape_mountain_resize.jpg");
// import { Button, Form, Col } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import Input from "./form-input";
import HeaderBanner from "./header-banner";

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
        <HeaderBanner title="Contact Us" />

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
