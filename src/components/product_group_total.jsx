import React, { Component } from "react";
// import React from "react";

class GroupeTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   filterBrands: this.props.filterBrands,
    };
  }

  render() {
    return (
      <div className="group-total">
        <span className="badge badge-secondary">
          <h6>
            Total filterBrands : <br />
            {this.props.filterBrands.length}
          </h6>
        </span>

        <span className="badge badge-info">
          <h6>
            totalCounters : <br />
            {this.props.brands.length}
            {
              // this.state.counters.filter((c) => c.value > 0).length
            }
          </h6>
        </span>

        <span className="badge badge-danger">
          <h6>
            this.state.test00 : <br />
            {this.props.test00}
          </h6>
        </span>

        <span className="badge badge-warning">
          {this.props.filterBrands.map((id, brands) => (
            <h6>
              this.props.test00 :<br />
              {this.props.test00}
              <br />
              dateTest00=
              <br />
              {this.props.test00}
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
