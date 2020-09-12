import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "normalize.css";
import "./index.css";
// import "./styles/style1.css";
import "./styles/style1.scss";
// import App from "./App";
import NavBar from "./components/navbar";
// import Maincontent from "./components/maincontent";
// import MyForm from "./components/myform";
// import Item from "./components/product_item";
import Items from "./components/product_items";
import Homepage from "./components/homepage";
import Ressources from "./components/ressources";
// import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    {/* <Maincontent /> */}
    {/* <App /> */}
    {/* <MyForm /> */}
    {/* /////// */}
    {/* <Items /> */}
    {/* <Homepage /> */}
    {/* <Ressources /> */}
    <Router>
      <div>
        <NavBar totalCounters={6} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/ressources">
            <Ress />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function Home() {
  return <Homepage />;
}

function Shop() {
  return <Items />;
}

function Ress() {
  return <Ressources />;
}
