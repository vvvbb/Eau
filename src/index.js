import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/components.css";
// import App from "./App";
import NavBar from "./components/navbar";
import Maincontent from "./components/maincontent";
// import "bootstrap/dist/css/bootstrap.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Maincontent />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
