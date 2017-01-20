import React from 'react';
import {Link, hashHistory} from 'react-router';

class BatchShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      batches: this.props.user.batch_details
    };
    this.goToBatch = this.goToBatch.bind(this);
    this.deleteBatch = this.deleteBatch.bind(this);
    }

    goToBatch(id){
      return (e) => {
        e.preventDefault();
        hashHistory.push(`/batches/${id}`);
      };
    }

    deleteBatch(id, i){
      return (e) => {
        e.preventDefault();
        let check = confirm("Are you sure you want to delete this batch? All images and orders will be erased.");
          if (check == true) {
            let newBatches = this.state.batches;
              newBatches.splice(i, 1);
              this.setState({batches: newBatches},
                () =>{
              this.props.deleteBatch(id);});

          }
      };
    }
  render(){

    const user = this.props.user;
    console.log("user", user);
    let userOrders = "";
    let userBatches ="";
    let callUser = `${user.first_name}'s`;

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
        let deleteLinks = (id, i) => ("");
        if( this.props.currentUser !== null){
          if(user.id === this.props.currentUser.id){
          deleteLinks = (id, i) =>(<a href="" onClick={this.deleteBatch(id, i)}>Delete</a>);
          callUser = "Your";
        }}

        if(this.state.batches.length > 0){
          userBatches = this.state.batches.map( (batch, i) => (
            <div className="user-thumbnail clickable" >
              <ul onClick={this.goToBatch(batch.batch_id)}>
              <li className="thumbnail-img-container"><img src={batch.main_image} /></li>
              <li>{batch.title}</li>
              </ul>
              {deleteLinks(batch.batch_id, i)}
            </div>
          ));
        }

        return(  <div className="user-profile">
            <div className="nav-bar">

            </div>
            <div className="user-info">
            <div className="left">
                <h1>{user.first_name} {user.last_name}</h1>
              <img className="user-image" src={user.img_url} />
            </div>
            <div className="right">
              <h3>{callUser} Orders ( {user.order_details.length} )</h3>

              <div className="user-thumbnails">
                {userOrders}
              </div>
                <h3>{callUser} Batches ({user.batches.length})  </h3>
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
