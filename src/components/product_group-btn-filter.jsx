// import React, { Component } from "react";
import React from "react";
import { Button } from "react-bootstrap";

class GroupButtonFilter extends React.Component {
  render() {
    return (
      <div className="group-button">
        {this.props.carbondioxide.map(({ name, id }) => (
          <Button
            className="btn btn-light btn-outline-secondary"
            // aria-pressed="false"
            // active
            // key={this.props.carbondioxide.id}
            key={id}
            value={this.props.carbondioxide.value}
            onClick={() => this.props.onClickChild(name)} //filterBrands onclick
          >
            {name}
          </Button>
        ))}
      </div>
    );
  }
}

export default GroupButtonFilter;
