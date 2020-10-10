import React from "react";
import pict_mountain from "../img/landscape_mountain_resize.jpg";

class HeaderBanner extends React.Component {
  render() {
    return (
      <div className="header-banner d-flex  justify-content-center align-items-center">
        <img src={pict_mountain} alt="mountain" />
        <h1 className="text-uppercase text-center">{this.props.title}</h1>
      </div>
    );
  }
}

export default HeaderBanner;
