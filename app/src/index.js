import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/Shared/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

ReactDOM.render(
  <div>
    <Navigation />
  </div>,
  document.getElementById("root")
);
