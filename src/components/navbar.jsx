import React, { Component } from "react";
import lang_en from "../img/flag_uk.png";
import lang_fr from "../img/flag_fr.png";
import lang_zh from "../img/flag_zh.png";

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
    imageUrl: "https://picsum.photos/seed//picsum/50/50?blur=2",
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
      <nav className="navbar navbar-light bg-light">
        <ul className="navbarlist">
          <ul className="navbarulleft">
            <li>
              <a
                className="navbar-brand-logo"
                href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
              >
                <img
                  style={this.img_properties}
                  src={this.img_properties.imageUrl}
                  alt=""
                />
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="2x"
                color="#CCCCCC"
              />
            </li>
          </ul>
          <ul className="navbarulmenu">
            <li>
              <a href="./">Produit</a>
            </li>
            <li>
              <a href="https://reactjs.org/">Tarif</a>
            </li>
            <li>
              <a href="https://www.w3schools.com/">Ressources</a>
            </li>
            <li>
              <a href="./">Support</a>
            </li>
            <li className="navbar-lang">
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
            </li>
            <li>
              <a href="./" className="navbar-connexion">
                Connexion
              </a>
            </li>
            <li>
              <a href="./" className="navbar-connexion">
                Essayer gratuitement
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
