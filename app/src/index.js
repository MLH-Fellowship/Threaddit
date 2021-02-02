import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MyRouter from './components/Router';

ReactDOM.render(
  <div>
    <Header/>
    <Navigation />
    </div>,
  document.getElementById('root')
);
