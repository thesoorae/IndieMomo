import React from 'react';
import { Link, hashHistory } from 'react-router';



const demoLogin = (login) => {
  return (e)=> {
  e.preventDefault();
  const demo = {username: "Bruce Lee", password: "123456"};
  login({user: demo});
  };
};



const sessionLinks = (login) => (
  <span className="header-group">

  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
  <div className="login-demo">
    Don't want to create an account? &nbsp;
    <a href="" onClick={demoLogin(login)}>Demo</a>
  </div>
</span>

);

const goToProfile = (id) => {
  return (e) => {
  hashHistory.replace(`/users/${id}`);
  };
};


const personalGreeting = (currentUser, logout) => (
<div className="greeting" onClick={goToProfile(currentUser.id)}>
  <img src={currentUser.img_url} />
  <span className="header-group">
    <h3 className="header-name">Hi, {currentUser.username}!</h3>
    <a href="" id="logout" onClick={logout}>Log Out</a>
	</span>
</div>
);

const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;
