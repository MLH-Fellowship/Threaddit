import React from "react";
import { Menu, MenuItem} from '@material-ui/core';
import ReactDOM from 'react-dom';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from "react-dom";

export default function MyRouter() {
    return(
    ReactDOM.render(
            <Router>
             <Route path="/" exact component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login}/>
            </Router>,
            document.getElementById('root')
            ));
  }