import React from "react";
// import { Button, Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HeaderBanner from "./header-banner";
import Input from "./form-input";
import TextArea from "./form-textarea";

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

        <div className="contactus-form container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <Input id={1} name="name" label="Your Name..." />
              <Input id={2} name="lastname" label="Your Last Name..." />
              {/* <p>P1</p> */}
              {/* <p>P2</p> */}
            </div>

            <select className="form-select" name="subject">
              <option value="">--Subject--</option>
              <option value="Request">Request</option>
              <option value="Information">Information</option>
              <option value="Specification">Specification</option>
            </select>

            <TextArea id={3} name="message" label="Your Message..." />

            {/* <input type="submit" value="Submit" /> */}

            <Button variant="outline-dark mb-5" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Ressources;
