import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Details from './components/Details';
// import Create from './components/Create';
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
            {/* <Route 
              path="/:id" 
              exact
              render={(routerProps) => <Details {...routerProps} />} 
            /> */}
            {/* <Route 
              path="/create" 
              exact
              render={(routerProps) => <Create {...routerProps} />} 
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
