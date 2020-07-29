import React, { Component } from "react";
// import Card from "react-bootstrap/Card";

//stateless functionnal component
class CategoriesLarge extends Component {
  state = {};

  render() {
    return (
      <ul
        className="list-group ctg_large"
        style={{ width: "13vw", minWidth: "18rem" }}
      >
        <li className="list-group-item">All Categories</li>
        <li className="list-group-item">Still Water</li>
        <li className="list-group-item">Sparkling Water</li>
        <li className="list-group-item">Mountain Spring Water</li>
        <li className="list-group-item">Mineral Water</li>
        <li className="list-group-item">Tap Water</li>
      </ul>
    );
  }
}

export default CategoriesLarge;
