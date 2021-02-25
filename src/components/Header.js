import React, { Component } from 'react';
import '../App.css';
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header>
                <p className='welcome'>Welcome to KB's Cocktails Front End</p>
                <NavLink exact activeClassName="selected" to="/">
                    Home
                </NavLink>
                {/* <NavLink exact activeClassName="selected" to="/create">
                    Create
                </NavLink> */}
            </header>
        )
    }
})