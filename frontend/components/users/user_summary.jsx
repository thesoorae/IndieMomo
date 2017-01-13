import React from 'react';
import {Link} from 'react-router';

class UserSummary extends React.Component{
  render(){
    const user = this.props.user;
    return (<div className="user-summary">
    <img src={user.img_url} />
    <ul className="user-text">
      <li className="name">{user.username}</li>
      <li className="address">Neighborhood: {user.zip_code}</li>
      <li><Link to={`/users/${user.id}`}>About</Link></li>
    </ul>
  </div>);
}}

export default UserSummary;
