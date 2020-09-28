import React from "react";
import pict_mountain from "../img/landscape_mountain_resize.jpg";

class HeaderBanner extends React.Component {
  render() {
    return (
      <div className="header-banner">
        <img src={pict_mountain} alt="mountain" />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default HeaderBanner;
