import React, { Component } from "react"; //imrc tab shortcut
import Button from "react-bootstrap/Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
    this.incFav = this.incFav.bind(this);
    this.decFav = this.decFav.bind(this);
  }
  incFav(e) {
    this.setState({ likes: this.state.likes + 1 });
  }
  decFav(e) {
    this.setState({ likes: this.state.likes - 1 });
  }

  state = {
    // count: 0,
    // value: this.props.counter.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  // handleIncrement = () => {
  //   //   // console.log("Increment Cliked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };
  // handleDecrease = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

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
          display: this.props.unique === 0 ? "none" : "flex",
        }}
      >
        <Button
          onClick={() => this.props.onDecrease(this.props.counter)}
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
          onClick={() => this.props.onIncrement(this.props.counter)}
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
