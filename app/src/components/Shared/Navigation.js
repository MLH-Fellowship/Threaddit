import React, { useContext, useEffect } from "react";
import Home from "../Home/Home";
import Chats from "../Chats/Chats";
import { Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../../store/AuthContext";
import { Switch, Route, Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { ChatRightTextFill } from "react-bootstrap-icons";

const Navigation = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => authContext.setIsAuth(false);

  useEffect(() => {
    authContext.checkAuth();
  }, [authContext]);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-end">
        <Navbar.Brand as={Link} to="/">
          <ChatRightTextFill color="white" size="1.5rem" />
          {"  "}
          Threaddit
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/chats">
              {authContext.isAuth ? "Chats" : "Login"}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          {authContext.isAuth && (
            <Nav.Item className="justify-content-end">
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
