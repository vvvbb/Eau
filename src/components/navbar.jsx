import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { NavLink } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";

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
    let styleCounter = "badge badge-pill badge-";
    styleCounter += this.props.totalCounters === 0 ? "secondary" : "success";

    return (
      <Navbar bg="light" expand="md" sticky="top">
        <Navbar.Brand href="#home" className="ml-lg-5">
          <Link to="/">
            <img
              style={this.img_properties}
              src={this.img_properties.imageUrl}
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#CCCCCC" />
          <span
            // className="badge badge-pill badge-secondary"
            className={styleCounter}
          >
            {this.props.totalCounters}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#shop">
              <Link to="/shop">Shop</Link>
            </Nav.Link>
            <Nav.Link href="#ressources">
              <Link to="/ressources">Ressources</Link>
            </Nav.Link>
            <Nav.Link href="#contactus">
              <Link to="/contactus">Contact us</Link>
            </Nav.Link>
            <Nav.Link href="#connexion">
              <Link to="/connexion">
                <a href="/" className="navbar-border">
                  Connexion
                </a>
              </Link>
            </Nav.Link>
            <Nav.Link href="#freesample">
              <Link to="/freesample">
                <a href="/" className="navbar-border">
                  Free Sample
                </a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      /* <nav className=" navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbarlist">
          <ul className="navbarulleft">
            <li>
              <Link to="/">
                <img
                  style={this.img_properties}
                  src={this.img_properties.imageUrl}
                  alt=""
                />
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
              <span
                // className="badge badge-pill badge-secondary"
                className={styleCounter}
              >
                {this.props.totalCounters}
              </span>
            </li>
          </ul>
          <ul className="navbarulmenu">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/ressources">Ressources</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              <a href="#" className="navbar-connexion">
                Connexion
              </a>
            </li>
            <li>
              <a href="#" className="navbar-connexion">
                Free Sample
              </a>
            </li>
          </ul>
        </ul>
      </nav>
      */
    );
  }
}

export default NavBar;
