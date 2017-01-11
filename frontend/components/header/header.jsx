import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const Header = () => (
  <header className="main-header">
    <span className="left">
      <Link to="/" className="header-link">
        <h1 >Indiemomo</h1>
      </Link>
      <h2> Explore </h2>
      <h2> How It Works </h2>
    </span>
  <span className="right">
    <button>Start A Batch</button>
    <GreetingContainer />
  </span>
</header>);

export default Header;
