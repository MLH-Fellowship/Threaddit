import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Shared/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

ReactDOM.render(
  <Router>
    <Navigation />
  </Router>,
  document.getElementById("root")
);
