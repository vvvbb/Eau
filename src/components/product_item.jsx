import React, { Component } from "react";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Counters from "./counters";

class Item extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      // { id: 2, value: 0 },
      // { id: 3, value: 1 },
      // { id: 4, value: 0 },
    ],
    test0: 42,
    test00: "ecrit ne parec",
    unique: 0,
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
  // newTempFonction = () => {
  //   this.setState(({ unique }) => ({
  //     unique: unique + 1,
  //   }));
  // };
  addToCart = (counter) => {
    console.log("addToCart DONE");
    this.setState(({ unique }) => ({
      unique: unique + 1,
    }));

    // const test003 = this.state.counters[0].value;
    // console.log("test :" + test003);
    // const test003 = this.state.counters[0].value + 1;
    // console.log("test :" + test003);

    // this.setState({ counters });

    // this.setState(({ test003 }) => ({
    //   // unique: test003,
    // }));
    // couter++;
    // const value: this.state.counter.value,
    // this.setState({ value: this.state.value + 1 });
  };

  newTempFonction002 = () => {
    this.setState((prev) => ({ unique: prev.unique + 1 }));
  };

  render() {
    return (
      <Card border="secondary" style={{ width: "33vw", minWidth: "28rem" }}>
        <Card.Img variant="top" src={this.props.dataImg} />
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
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrease={this.handleDecrease}
          unique={this.state.unique}
          // onTest={() => console.log("123")}
          // count="test"
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
