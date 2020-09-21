import React, { Component } from "react"; //imrc tab shortcut
import Counter from "./counter";
// import Button from "react-bootstrap/Button";

// cc tab shortcut
class Counters extends Component {
  render() {
    const { counters, onIncrement, onDecrease, unique } = this.props;

    return (
      <div>
        {counters.map((counter) => (
          <Counter
            // id={counter.id}
            key={counter.id}
            onDecrease={onDecrease}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
            counter={counter}
            unique={unique}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
