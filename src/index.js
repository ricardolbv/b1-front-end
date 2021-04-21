import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import { Route } from 'react-router-dom';



ReactDOM.render(
  <Router>
    <Route path="/" exact component={LoginPage}/>
    <Route path="/home" component={HomePage}/>
  </Router> 
  ,
  document.getElementById('root')
);

