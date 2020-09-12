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
          </div>
        </div>

        <div className="ressources-list">
          <ul>
            <li>
              Adult humans are 60 percent water, and our blood is 90 percent
              water.
            </li>
            <li>
              There is no universally agreed quantity of water that must be
              consumed daily.
            </li>
            <li>
              Water is made up of two elements, hydrogen and oxygen. Its
              chemical formula is H2O.
            </li>
            <li>Water has three different states, liquid, solid and gas.</li>
            <li>
              68.7% of the fresh water on Earth is trapped in glaciers. 30% of
              fresh water is in the ground. 1.7% of the world’s water is frozen
              and therefore unusable.
            </li>
            <li>
              Pour fabriquer un litre de bière il est nécéssaire d'utiliser 300
              litres d'eau.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Ressources;
