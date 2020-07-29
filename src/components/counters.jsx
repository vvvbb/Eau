import React, { Component } from "react"; //imrc tab shortcut
import Counter from "./counter";
// import Button from "react-bootstrap/Button";

// cc tab shortcut
class Counters extends Component {
  // onTestPourQueCaMarche = (counter) => {
  //   this.setState({ value: this.state.counters[1].value + 1 });
  // };

  render() {
    const { counters, onIncrement, onDecrease, unique } = this.props;

    return (
      <div>
        {counters.map((counter) => (
          <Counter
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
