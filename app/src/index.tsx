import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import Navigation from "./components/Shared/Navigation";
import awsconfig from "./aws-exports";
import AuthContextProvider from "./Store/AuthContext";
import UserContextProvider from "./Store/UserContext";

Amplify.configure(awsconfig);

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
