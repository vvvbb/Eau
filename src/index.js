import React from "react";
import ReactDOM from "react-dom";
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

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    {/* <Maincontent /> */}
    {/* <App /> */}
    {/* <MyForm /> */}
    <Items />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
