import React from 'react';
import {Link, hashHistory} from 'react-router';

class BatchShow extends React.Component{
  constructor(props){
    super(props);
    this.goToBatch = this.goToBatch.bind(this);
    }

    goToBatch(id){
      return (e) => {
        e.preventDefault();
        hashHistory.push(`/batches/${id}`);
      };
    }

  render(){

    const user = this.props.user;
    console.log("user", user);
    let userOrders = "";
    let userBatches ="";


      if(this.props.user){
        if(user.order_details.length > 0){
          userOrders = user.order_details.map( option => (
            <div className="user-thumbnail clickable" onClick={this.goToBatch(option.batch_id)}>
              <ul>
              <li><img src={option.main_image} /></li>

              <li><strong> {option.qty}</strong> Pieces - <strong>$ {option.cost}</strong></li>

              </ul>
            </div>
          ));
        }

        if(user.batches.length > 0){
          console.log("user's batches", user.batches);
          userBatches = user.batch_details.map( batch => (
            <div className="user-thumbnail clickable" onClick={this.goToBatch(batch.batch_id)}>
              <ul>
              <li><img src={batch.main_image} /></li>
              <li>{batch.title}</li>
              </ul>
            </div>
          ));
        }

        return(  <div className="user-profile">
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
              <h2>About Me</h2>
              <h3>My Orders ( {user.order_details.length} )</h3>

              <div className="user-thumbnails">
                {userOrders}
              </div>
                <h3> My Batches ({user.batches.length})  </h3>
                <div className="user-thumbnails">
                  {userBatches}
                </div>
            </div>
            </div>
          </div>);
        } else {
          return (<div>loading User</div>);
        }

  }
}
export default BatchShow;
