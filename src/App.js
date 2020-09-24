import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "normalize.css";
import "./styles/style1.scss";

import NavBar from "./components/navbar";
import Home from "./components/home";
// import Item from "./components/product_item";
import Items from "./components/product_items";
import Ressources from "./components/ressources";
import Contactus from "./components/contactus";

function App() {
  return (
    <React.StrictMode>
      {/* <Maincontent /> */}
      {/* <MyForm /> */}
      {/* / */}
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
              <ShopPage />
            </Route>
            <Route path="/ressources">
              <RessPage />
            </Route>
            <Route path="/contactus">
              <Contactpage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;

function HomePage() {
  return <Home />;
}

function Contactpage() {
  return <Contactus />;
}

function ShopPage() {
  return <Items />;
}

function RessPage() {
  return <Ressources />;
}
