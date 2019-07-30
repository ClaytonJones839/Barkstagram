import React from 'react';
import { Link } from 'react-router-dom';
import UserShow from '../session_form/user_show_container.js'



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">

        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <button className="header-button" onClick={logout}>Log Out</button>
            <UserShow currentUser={currentUser} logout={logout} />
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();

};


export default Greeting;