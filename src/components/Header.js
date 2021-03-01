import React, { Component } from 'react';
import '../App.css';
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header className='App-header'>
                <div className='welcome'>Welcome to KB's Cocktails (now featuring API!)</div>
                <NavLink exact activeClassName="selected" to="/">
                    Home
                </NavLink>
                <NavLink exact activeClassName="selected" to="/create">
                    Create
                </NavLink>
            </header>
        )
    }
})