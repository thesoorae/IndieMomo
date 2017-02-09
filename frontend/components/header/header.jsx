import React from 'react';
import { Link, hashHistory } from 'react-router';
import GreetingContainer from './greeting_container';
import Search from '../search/search';

const startBatch=() => (
  hashHistory.replace('/batches/new')
);

const goToAll=() => (
  hashHistory.replace('/batches/results/a')
);

const howItWorks=() => (
  hashHistory.replace('/how_it_works')
);


class Header extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
    <header className="main-header">
      <span className="left">
        <Link to="/" className="header-link">
          <h1 >Indiemomo</h1>
        </Link>
        <h2 className="clickable hover-text" onClick={goToAll}> Explore </h2>
        <h2 className="clickable hover-text" onClick={howItWorks}> How It Works </h2>
        <Search batches={this.props.batches} fetchSearchResults={this.props.fetchSearchResults}/>
      </span>
    <span className="right">
      <button className="start-batch clickable hover-button" onClick={startBatch}>Start A Batch</button>

      <GreetingContainer />
    </span>
  </header>);

  }
}


export default Header;



// const startBatch=(currentUser) => {
//   console.log("in component" , currentUser);
//   if(currentUser == null){
//   hashHistory.replace('/signup');
// } else {
//   hashHistory.replace('/batches/new');}
// };
