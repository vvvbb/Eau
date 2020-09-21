import React, { Component } from "react";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Counters from "./counters";

class Item extends Component {
  state = {
    // counter_unique: this.props.counter_unique,
    // counters: this.props.counters,
    // counters: [
    // { id: 1, value: 0 },
    //   // { id: 2, value: 0 },
    //   // { id: 3, value: 1 },
    //   // { id: 4, value: 0 },
    // ],
    // unique: this.props.dataUnique,
  };
  // handleIncrement = (counter) => {
  //   // console.log(counter);
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  //   this.setState({ unique: this.state.unique + 1 });
  //   // console.log(this.state.unique);
  // };
  // handleDecrease = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value--;
  //   this.setState({ counters });
  //   this.setState({ unique: this.state.unique - 1 });
  // };

  // addToCart = (counter) => {
  //   console.log("addToCart DONE");
  //   this.setState(({ unique }) => ({
  //     unique: unique + 1,
  //   }));
  // };

  render() {
    const { counters, onIncrement, onDecrease, unique } = this.props;

    return (
      <Card border="secondary" className="item">
        <Card.Img variant="top" src={this.props.dataImg} />
        <Card.Body>
          <Card.Title>{this.props.dataText}</Card.Title>
          <Card.Title style={{ fontSize: "90%", color: "grey" }}>
            {this.props.dataPrice}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. {this.props.unique} AAA
            {this.props.counter}.
          </Card.Text>
        </Card.Body>
        <Counters
          counters={counters}
          // onIncrement={this.handleIncrement}
          onIncrement={onIncrement}
          onDecrease={onDecrease}
          unique={unique}
          // unique={this.props.dataTest00}
        />
        <Button
          variant="secondary"
          size="lg"
          style={{
            display: this.props.unique === 0 ? "block" : "none",
          }}
          onClick={this.props.onClickaddToCart}
        >
          ADD TO CART {this.props.unique}
        </Button>
      </Card>
    );
  }
}

export default Item;
