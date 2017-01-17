import React from 'react';
import {Link, hashHistory} from 'react-router';

class UserSummary extends React.Component{
  constructor(props){
    super(props);
    this.showUser = this.showUser.bind(this);
  }

  showUser(id){
    return (e) => {
    e.preventDefault();
    hashHistory.push(`/users/${id}`);
  };}

  render(){
    const user = this.props.user;
    return (<div  onClick={this.showUser(user.id)} className="user-summary">
    <img src={user.img_url} />
    <ul className="user-text">
      <li className="name">{user.username}</li>
      <li className="address">Neighborhood: {user.zip_code}</li>
      <li><Link to={`/users/${user.id}`}>About</Link></li>
    </ul>
  </div>);
}}

export default UserSummary;
