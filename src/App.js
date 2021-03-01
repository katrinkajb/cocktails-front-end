import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details.js';
import Create from './components/Create.js';
import Header from './components/Header.js';
import Home from './components/Home.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <Home {...routerProps} />} 
            />
            <Route 
              path="/create" 
              exact
              component={Create} 
            />
            <Route 
              path="/:id" 
              exact
              render={(routerProps) => <Details {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
