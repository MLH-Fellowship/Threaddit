import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import Navigation from "./components/Shared/Navigation";
import awsconfig from "./aws-exports";
import AuthContextProvider from "./store/AuthContext";

Amplify.configure(awsconfig);

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
