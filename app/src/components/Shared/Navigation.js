import React, { useContext, useEffect } from "react";
import Home from "../Home/Home";
import Chats from "../Chats/Chats";
import { Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../../store/AuthContext";
import { Switch, Route, Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Navigation = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => authContext.setIsAuth(false);

  useEffect(() => {
    authContext.checkAuth();
  }, [authContext]);

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
          {authContext.isAuth && (
            <Nav.Item>
              <AmplifySignOut onClick={() => handleLogout()} />
            </Nav.Item>
          )}
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
