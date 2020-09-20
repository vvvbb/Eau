import React, { Component } from "react";
// import React from "react";
import { Button } from "react-bootstrap";

// const renderAll = this.state.filterBrands.map((brands) => (
//   <li key={brands.name}>{brands.name}</li>
// ));

class GroupButtonFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="group-button">
        {this.props.carbondioxide.map(({ name, value }) => (
          <Button
            className="btn btn-light btn-outline-secondary"
            // aria-pressed="false"
            // active
            key={this.props.carbondioxide.key}
            value={this.props.carbondioxide.value}
            onClick={() => this.props.onClickChild(name)} //filterBrands onclick
          >
            {name}
          </Button>
        ))}
        {/* <p>renderAll: {renderAll}</p> */}
        {/* <h2>{this.state.filterBrands.length}</h2> */}
      </div>
    );
  }
}

export default GroupButtonFilter;
