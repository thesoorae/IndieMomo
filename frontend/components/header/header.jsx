import React from 'react';
import { Link, hashHistory } from 'react-router';
import GreetingContainer from './greeting_container';

const startBatch=() => (
  hashHistory.replace('/batches/new')
);



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
    <button className="start-batch clickable" onClick={startBatch}>Start A Batch</button>

    <GreetingContainer />
  </span>
</header>);

export default Header;



// const startBatch=(currentUser) => {
//   console.log("in component" , currentUser);
//   if(currentUser == null){
//   hashHistory.replace('/signup');
// } else {
//   hashHistory.replace('/batches/new');}
// };
