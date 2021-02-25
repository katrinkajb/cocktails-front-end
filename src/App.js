import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from '../components/Details'
import Header from './components/Header';
import Home from './components/Home';

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
              path="/:_id" 
              exact
              render={(routerProps) => <Details {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
