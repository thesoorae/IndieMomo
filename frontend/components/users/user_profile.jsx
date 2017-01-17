import React from 'react';
import {Link} from 'react-router';

class BatchShow extends React.Component{
  constructor(props){
    super(props);

    }


  render(){

    const user = this.props.user;
    console.log("user", user);
    let userOrders = "";
    let userBatches ="";


      if(this.props.user){
        if(user.order_details.length > 0){
          userOrders = user.order_details.map( option => (
            <div className="user-thumbnail">
              <ul>
              <li><img src={option.main_image} /></li>

              <li><strong> {option.qty}</strong> Pieces - <strong>$ {option.cost}</strong></li>
              
              </ul>
            </div>
          ));
        }

        if(user.batches.length > 0){
          userBatches = user.batches.map( batch => (
            <div className="user-thumbnail">
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
