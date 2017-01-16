import React from 'react';
import {Link} from 'react-router';

class BatchShow extends React.Component{
  constructor(props){
    super(props);

    }

  render(){
    const user = this.props.user;

    return (
      <div className="user-profile">
        <div className="nav-bar">

        </div>
        <div className="title">
          <h1>{user.first_name} {user.last_name}</h1>
        </div>
        <div className="user-info">
        <div className="left">
          <img src={user.img_url} />
        </div>
        <div className="right">
          <ul>
            <li><h2>About Me</h2></li>
            <li><h3>{user.batches.length}</h3> Batches </li>
            <li><h3>{user.orders.length}</h3> Orders </li>
          </ul>
        </div>
        </div>
      </div>
    );

  }
}
export default BatchShow;
