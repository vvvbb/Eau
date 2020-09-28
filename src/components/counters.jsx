import React, { Component } from "react"; //imrc tab shortcut
import Counter from "./counter";

// cc tab shortcut
class Counters extends Component {
  render() {
    const { item, brands, onIncrement, onDecrease, id } = this.props;
    return (
      <div>
        <Counter
          id={id}
          item={item}
          brands={brands}
          countervalue={brands[id].value}
          onIncrement={onIncrement}
          onDecrease={onDecrease}
        />
      </div>
    );
  }
}

export default Counters;
