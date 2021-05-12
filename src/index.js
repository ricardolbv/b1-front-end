import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store'


ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route path="/" exact component={LoginPage}/>
      <Route path="/home" component={HomePage}/>
    </Router> 
  </Provider>
  ,
  document.getElementById('root')
);

