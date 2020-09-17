import React, { Component } from "react";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Counters from "./counters";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state.unique = this.props.dateTest00;
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      // { id: 2, value: 0 },
      // { id: 3, value: 1 },
      // { id: 4, value: 0 },
    ],
    // unique: 0,
  };
  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    this.setState({ unique: this.state.unique + 1 });
    // console.log(this.state.unique);
  };
  handleDecrease = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
    this.setState({ unique: this.state.unique - 1 });
  };

  addToCart = (counter) => {
    // console.log("addToCart DONE");
    this.setState(({ unique }) => ({
      unique: unique + 1,
    }));
  };

  // newTempFonction002 = () => {
  //   this.setState((prev) => ({ unique: prev.unique + 1 }));
  // };

  render() {
    return (
      <Card border="secondary" className="item">
        {/* <h6>{this.state.counters.filter((c) => c.value > 0).length}</h6> */}
        {/* <h6>{this.state.unique.map((c) => c.value > 0).length}</h6> */}
        {/* <h6>{this.state.unique}</h6> */}
        <Card.Img variant="top" src={this.props.dataImg} />
        <Card.Body>
          <Card.Title>{this.props.dataText}</Card.Title>
          <Card.Title style={{ fontSize: "90%", color: "grey" }}>
            {this.props.dataPrice}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. {this.state.unique} AAA
            {this.props.dateTest00}.
          </Card.Text>
        </Card.Body>
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrease={this.handleDecrease}
          unique={this.state.unique}
          // unique={this.props.dataTest00}
        />
        <Button
          variant="secondary"
          size="lg"
          style={{
            display: this.state.unique === 0 ? "block" : "none",
          }}
          onClick={this.addToCart}
        >
          ADD TO CART
        </Button>
      </Card>
    );
  }
}

export default Item;
