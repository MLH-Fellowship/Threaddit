import React from "react";
import Home from "../Home/Home";
import Chats from "../Chats/Chats";
import { Navbar, Nav } from "react-bootstrap";

import { Switch, Route, Link } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand as={Link} to="/">
          Threaddit
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/chats">
            Chats
          </Nav.Link>
          <Nav.Item>
            <AmplifySignOut />
          </Nav.Item>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chats" exact component={Chats} />
      </Switch>
    </>
  );
};

export default Navigation;
