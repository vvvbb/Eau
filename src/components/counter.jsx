import React, { Component } from "react"; //imrc tab shortcut
import Button from "react-bootstrap/Button";

class Counter extends Component {
  formatCount() {
    const value = this.props.unique;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 "; //put space at the end
    classes += this.props.unique === 0 ? "badge-warning" : "badge-light";
    return classes;
  }

  render() {
    // console.log("props", this.props);
    // React.createElement("div")
    return (
      <div
        className="counter"
        style={{
          display:
            this.props.brands[this.props.id].value === 0 ? "none" : "flex",
        }}
      >
        <Button
          onClick={() => this.props.onDecrease(this.props.item)}
          className="btn"
          size="lg"
          variant="secondary"
        >
          -
        </Button>

        <span className="">
          {/* {this.formatCount()} in cart */}
          {this.props.countervalue} in cart
        </span>

        <Button
          onClick={() => this.props.onIncrement(this.props.item)}
          className=" btn"
          size="lg"
          variant="secondary"
        >
          +
        </Button>
      </div>
    );
  }
}

export default Counter;
