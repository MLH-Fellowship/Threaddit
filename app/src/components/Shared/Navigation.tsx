import React, { useContext, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Switch, Route, Link } from "react-router-dom";
import { ChatRightTextFill } from "react-bootstrap-icons";

import Home from "../Home/Home";
import Chats from "../Chats/Chats";
import { AuthContext } from "../../Store/AuthContext";
import { UserContext } from "../../Store/UserContext";

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const handleLogout = () => authContext.setIsAuth(false);

  useEffect(() => {
    const setUserProfile = async () => {
      userContext.setUser(await authContext.checkAuth());
    };
    setUserProfile();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authContext]);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-end align-middle threaddit-heading"
      >
        <Navbar.Brand as={Link} to="/" className="threaddit-heading">
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
            <Nav.Link as={Link} to="/post">
              {authContext.isAuth ? "Post" : "Login"}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          {authContext.isAuth && (
            <Nav.Item>
              <AmplifySignOut onClick={() => handleLogout()} />
            </Nav.Item>
          )}
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" exact component={Chats} />
      </Switch>
    </>
  );
};

export default Navigation;
