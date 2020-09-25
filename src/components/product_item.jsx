import React, { Component } from "react";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Counters from "./counters";

class Item extends Component {
  render() {
    const { dataImg, dataText, dataPrice } = this.props;
    const { counters, onIncrement, onDecrease, brands } = this.props;
    return (
      <Card border="secondary" className="item">
        <Card.Img variant="top" src={dataImg} />
        <Card.Body>
          <Card.Title>{dataText}</Card.Title>
          <Card.Title style={{ fontSize: "90%", color: "grey" }}>
            {dataPrice}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {/* {this.props.counters[1].value} AAA {this.props.counter[1]} */}
            {this.props.brands[this.props.id].value} AAA {this.props.id}
          </Card.Text>
        </Card.Body>
        <Counters
          item={this.props.item}
          id={this.props.id}
          counters={counters}
          onIncrement={onIncrement}
          onDecrease={onDecrease}
          brands={brands}
        />
        <Button
          variant="secondary"
          size="lg"
          style={{
            display:
              this.props.brands[this.props.id].value === 0 ? "block" : "none",
          }}
          onClick={() => this.props.onIncrement(this.props.item)}
        >
          ADD TO CART
          {/* {this.props.brands[this.props.id].name} */}
        </Button>
      </Card>
    );
  }
}

export default Item;
