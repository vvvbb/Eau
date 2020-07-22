import React, { Component } from "react";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

//stateless functionnal component
class Item extends Component {
  render() {
    return (
      // <div className="item">
      //   <a className="navbar-brand-logo" href="./">
      //     <img src={this.props.dataImg} alt="" />
      //     <br />
      //     <br />
      //     <div>{this.props.dataText}</div>
      //   </a>
      // </div>
      <Card border="secondary" style={{ width: "33vw", minWidth: "28rem" }}>
        <Card.Img variant="top" src={this.props.dataImg} fluid />
        <Card.Body>
          <Card.Title>{this.props.dataText}</Card.Title>
          <Card.Title style={{ fontSize: "90%", color: "grey" }}>
            {this.props.dataPrice}
          </Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <Button variant="secondary">ADD TO CART</Button>
        {/* <Card.Footer></Card.Footer> */}
      </Card>
    );
  }
}

export default Item;
