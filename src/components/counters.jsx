import React, { Component } from "react"; //imrc tab shortcut
import Counter from "./counter";

// cc tab shortcut
class Counters extends Component {
  render() {
    //Passed this.props.cars from another component. It is an array of cars.
    const { brands, onIncrement, onDecrease } = this.props;
    return (
      <div>
        {/* {brands.map((counter, key) => (
          <Counter
            key={counter}
            countervalue={brands[key].value}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            brands={brands}
          />
        ))} */}
        {brands.map((car, key) => (
          <Counter
            brands={brands}
            key={key}
            countervalue={brands[key].value}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            car={car}
            counter={car}
            // key={car}
          />
          // <li key={car}>
          //   {car}
          //   {this.state.likes}
          //   <button onClick={this.incFav}>+</button>
          //   <button onClick={this.decFav}>-</button>
          // </li>;
        ))}
      </div>
    );

    // <ul>
    //   {cars.map((car, key) =>
    //   <Car car={car} key={car} />}
    // </ul>

    // const { counters, onIncrement, onDecrease, unique } = this.props;
    // return (
    //   <div>
    //     {counters.map((counter) => (
    //       <Counter
    //         // id={counter.id}
    //         key={counter.id}
    //         // counter={counter}
    //         counter={counter.value}
    //         onIncrement={onIncrement}
    //         onDecrease={onDecrease}
    //         // value={counter.value}
    //         // id={counter.id}
    //         // selected={counter.selected}
    //         unique={unique}
    //       />
    //     ))}
    //   </div>
    // );
  }
}

export default Counters;
