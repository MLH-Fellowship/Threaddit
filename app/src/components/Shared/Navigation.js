import React from "react";
import Home from "../Home/Home";
import { Navbar, Nav } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Navigation() {
  return (
    <Router>
      <div>
        <Navbar bg="light">
          <Navbar.Brand as={Link} to="/">
            Threaddit
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <AmplifySignOut />
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(Navigation, true);
