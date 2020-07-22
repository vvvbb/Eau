import React, { Component } from "react";

//stateless functionnal component
class Item extends Component {
  render() {
    return (
      <div className="item">
        <a className="navbar-brand-logo" href="./">
          <img src={this.props.dataImg} alt="" />
          <br />
          <br />
          <div>{this.props.dataText}</div>
        </a>
      </div>
    );
  }
}

export default Item;
