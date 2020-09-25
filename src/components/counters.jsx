import React, { Component } from "react"; //imrc tab shortcut
import Counter from "./counter";

// cc tab shortcut
class Counters extends Component {
  render() {
    //Passed this.props.cars from another component. It is an array of cars.
    const { brands, onIncrement, onDecrease } = this.props;
    return (
      <div>
        {brands
          // .filter((pilot) => pilot.key === this.props.test)
          // .filter((dd) => this.props.test === 1)
          .map((counter, key) => (
            <Counter
              test={this.props.test}
              brands={brands}
              key={key}
              // key={counter}
              // key={counter.id}
              // id={counter.id}
              // value={counter.value}
              car={counter}
              counter={counter}
              countervalue={brands[key].value}
              onIncrement={onIncrement}
              onDecrease={onDecrease}
              display={key}
            />
          ))
          .filter(() => 0 === this.props.test)}
      </div>
    );
  }
}

export default Counters;
