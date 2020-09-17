// import React, { Component } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import pict_water from "../img/kisspng-jug-pitcher-carafe-table-water-nos-collections-arcoroc.png";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Items from "./product_items";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <div className="homepageUpper">
        <div>
          <h1>Drink Water</h1>
          <h2>Water is good for your health</h2>

          <Link to="/shop">
            <Button variant="outline-light">Shop your water here</Button>
          </Link>

          {/* <Button variant="outline-light">Shop your water here</Button> */}
        </div>
        <div className="div-img">
          <img src={pict_water} alt="water" />
        </div>
      </div>
      <div className="homepageDown">
        <div>
          <p>
            Keeping hydrated is crucial for health and well-being, but many
            people do not consume enough fluids each day.
          </p>
          <p>
            Around 60 percent of the body is made up of water, and around 71
            percent of the planet’s surface is covered by water.<br></br>
            Perhaps it is the ubiquitous nature of water that means drinking
            enough each day is not at the top of many people’s lists of
            priorities.
          </p>
          {/* <Button variant="outline-secondary">Shop</Button>
          <Button variant="outline-secondary">Ressources</Button>
          <Button variant="outline-secondary">Contact us</Button> */}

          <Link to="/shop">
            <Button variant="outline-secondary">Shop</Button>
          </Link>
          <Link to="/ressources">
            <Button variant="outline-secondary">Ressources</Button>
          </Link>
          <Link to="/contactus">
            <Button variant="outline-secondary">Contact us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
