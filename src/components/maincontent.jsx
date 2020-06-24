// import React from "react";
import React, { Component } from "react";
import "./components.css";

// import NavBar from "./components/navbar";
// import Counters from "./components/counters";

class Maincontent extends Component {
  state = {
    count: 0,
    tags: ["Evian", "Badoit", "Volvic", "Vichy"],
  };

  img_properties = {
    border: "10px dashed #89A894",
    display: "block",
    margin: "auto",
    count: 0,
    imageUrl: "https://picsum.photos/500/200",
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
    // color: "cyan",
    // color: "#49393B",
    display: "flex",
    justifyContent: "center",
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; //return text p if array tags empty
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li> //else return content from here if array tags NOT empty
        ))}
      </ul>
    );
  }

  render() {
    // React.createElement("div")
    return (
      <div>
        <h1 style={this.styles}>Buvez de l'eau à l’international</h1>
        <p style={{ fontStyle: "italic" }}>
          <span>
            Activez en quelques clics les numéros fixes ou mobiles dont vous
            avez besoin dans plus de 100 destinations dans le monde. Utilisez
            ces numéros pour déployer un support téléphonique dans chacun des
            pays dans lequel vous opérez, ou équipez vos commerciaux de numéros
            locaux pour leur prospection.{" "}
          </span>
        </p>

        <img
          style={this.img_properties}
          src={this.img_properties.imageUrl}
          alt=""
        />

        <div
          style={{
            display: "grid",
            color: "#4B644A",
            // justifyContent: "space-around",
            justifyItems: "center",
            gridTemplateColumns: "auto",
          }}
        >
          <div>
            <h1>testH1</h1>
            {this.state.tags.length === 0 && "Please create a new tag!"}{" "}
            {/*if array=0 first condition true // if and second condition true // answer second*/}
            {this.renderTags()}
          </div>
        </div>
      </div>
    );
  }
}

export default Maincontent;
