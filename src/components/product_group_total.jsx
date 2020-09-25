import React, { Component } from "react";

class GroupeTotal extends Component {
  render() {
    const totalItem = this.props.brands.reduce(
      (accumulator, pilot) => accumulator + pilot.value,
      0
    );
    return (
      <div className="group-total">
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
              brands :<br />
              {brands}
              <br />
              <br />
            </h6>
          ))}
        </span>
      </div>
    );
  }
}

export default GroupeTotal;
