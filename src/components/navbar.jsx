import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { NavLink } from "react";
import { Link } from "react-router-dom";

// import lang_en from "../img/flag_uk.png";
// import lang_fr from "../img/flag_fr.png";
// import lang_zh from "../img/flag_zh.png";

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//stateless functionnal component
class NavBar extends Component {
  state = {
    count: 0,
    tags: ["Evian", "Badoit", "Volvic", "Vichy"],
    color: "red",
    year: 1964,
  };

  img_properties = {
    // border: "1px dashed #89A894",
    display: "block",
    // margin: "auto",
    // count: 0,
    imageUrl: "https://picsum.photos/seed//picsum/50/50?blur=1",
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
    // color: "cyan",
    color: "#49393B",
    display: "flex",
    justifyContent: "center",
  };

  render() {
    return (
      <nav className="navbar0000 navbar-light bg-light">
        <ul className="navbarlist">
          <ul className="navbarulleft">
            <li>
              {/* <a className="navbar-brand-logo" href="./"> */}
              <Link to="/">
                <img
                  style={this.img_properties}
                  src={this.img_properties.imageUrl}
                  alt=""
                />
                {/* </a> */}
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="2x"
                color="#CCCCCC"
              />
            </li>
            <li>
              <span className="badge badge-pill badge-secondary">
                {this.props.totalCounters}
              </span>
            </li>
          </ul>
          <ul className="navbarulmenu">
            <li>
              {/* <a href="./">Produit</a> */}
              {/* <NavLink to="/produit">Produit</NavLink> */}
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              {/* <a href="./">Ressources</a> */}
              {/* <NavLink to="/ressources">Ressources</NavLink> */}
              <Link to="/ressources">Ressources</Link>
            </li>
            <li>
              {/* <a href="./">Contact us</a> */}
              <Link to="/contactus">Contact us</Link>
            </li>
            {/* <li className="navbar-lang">
              <a href="www.vvbb.fr">
                <img src={lang_en} alt="" className="flag" />
              </a>
              <ul>
                <li>
                  <a href="www.vvbb.fr">
                    <img src={lang_fr} alt="" className="flag" />
                  </a>
                </li>
                <li>
                  <a href="www.vvbb.fr">
                    <img src={lang_zh} alt="" className="flag" />
                  </a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="./" className="navbar-connexion">
                Connexion
              </a>
            </li>
            <li>
              <a href="./" className="navbar-connexion">
                Free Sample
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
