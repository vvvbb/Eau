import React, { Component } from "react";

class GroupeTotal extends Component {
  render() {
    const totalItem = this.props.brands.reduce(
      (accumulator, pilot) => accumulator + pilot.value,
      0
    );
    return (
      <div className="group-total">
        <h3>My Cart</h3>
        <span className="badge badge-secondary">
          <h6>
            filterBrands.length : <br />
            {this.props.filterBrands.length}
          </h6>
        </span>
        <span className="badge badge-info">
          <h6>
            brands.length : <br />
            {this.props.brands.length}
            {
              // this.state.counters.filter((c) => c.value > 0).length
            }
          </h6>
        </span>
        <span className="badge badge-danger">
          <h6>
            totalItem : <br />
            {totalItem}
          </h6>
        </span>
        <span className="badge badge-warning">
          {this.props.filterBrands.map((id, brands) => (
            <h6 key={brands}>
              brands ID: {brands}
              <br />
              {this.props.brands[brands].name} :{" "}
              {this.props.brands[brands].value}
              <br />
              <hr />
            </h6>
          ))}
        </span>
      </div>
    );
  }
}

export default GroupeTotal;
