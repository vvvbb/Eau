// import React, { Component } from "react";
import React from "react";
import pict_mountain from "../img/landscape_mountain_resize.jpg";
//   background-image: url("../img/landscape_mountain_resize.jpg");
import { Button, Form, Col } from "react-bootstrap";

class Ressources extends React.Component {
  render() {
    return (
      <div className="ressources">
        <div className="ressources-head">
          <div className="ressources-pict-mountain">
            <img src={pict_mountain} alt="mountain" />
          </div>
          <div className="ressources-title">
            {/* <h1>Know Some Water Facts</h1> */}
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="form-container">
          <form action="action_page.php">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="Your name.." />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastame" placeholder="Your last name.." />
              </Form.Group>
            </Form.Row>

            {/* <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            /> */}

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="select" custom>
                <option>Request</option>
                <option>Information</option>
                <option>Specification</option>
              </Form.Control>
            </Form.Group>

            {/* <label for="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select> */}

            <Form.Group controlId="formGridMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Write something.." />
            </Form.Group>

            {/* <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              // style="height:200px"
            ></textarea> */}

            <Button
              type="submit"
              value="Submit"
              variant="outline-secondary"
              className="btn mb-2"
            >
              Submit
            </Button>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Ressources;
