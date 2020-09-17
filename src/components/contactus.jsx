// import React, { Component } from "react";
import React from "react";
import pict_mountain from "../img/landscape_mountain_resize.jpg";
//   background-image: url("../img/landscape_mountain_resize.jpg");

class Ressources extends React.Component {
  render() {
    return (
      <div className="ressources">
        <div className="ressources-head">
          <div className="ressources-pict-mountain">
            <img src={pict_mountain} alt="mountain" />
          </div>
          <div className="ressources-title">
            <h1>Know Some Water Facts</h1>
            <h2>Contact Us</h2>
          </div>
        </div>

        <div className="ressources-list">
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Ressources;
