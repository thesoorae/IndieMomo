import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <span className="header-group">

  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
</span>

);

const personalGreeting = (currentUser, logout) => (
	<span className="header-group">
    <h3 className="header-name">Hi, {currentUser.username}!</h3>
    <a id="logout" onClick={logout}>Log Out</a>
	</span>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
