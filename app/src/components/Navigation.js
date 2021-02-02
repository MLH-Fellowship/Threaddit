import React from "react";
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navigation() {
    return (
        <Router>
          <div>
            <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/" >Home</Nav.Link>
          
                  <Nav.Link as={Link} to="/login" >Login</Nav.Link>
           
                  <Nav.Link as={Link} to="/signup" >Sign up</Nav.Link>
              </Nav>
            </Navbar>
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>)
  }