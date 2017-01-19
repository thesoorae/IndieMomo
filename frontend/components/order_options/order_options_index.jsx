import React from 'react';
import {Link, hashHistory} from 'react-router';

class OrderOptionsIndex extends React.Component{
  constructor(props){
    super(props);

    this.placeOrder = this.placeOrder.bind(this);
  }

  placeOrder(optionId, currentUser, qty){
    return(e) => {
      e.preventDefault();
      if(currentUser == null){
        hashHistory.push('/login');}
      else {
      const newOrder = {
        order_option_id: optionId};
        this.props.createOrder(newOrder);
        this.props.increaseProgress(qty);
      }
    };}


  render(){
    console.log("orderOptions" , this.props.orderOptions);
    const optionItems =  this.props.orderOptions.map(option => (
      <li className="order-option-item" key={option.id}><ul className="order-option-item" key={option.id}>
      <li className="cost">$ {option.cost}</li>
      <li className="qty">You get {option.qty} pieces with this order!</li>
      <li className="option-description">{option.description}</li>
      <button className="order-button" onClick={this.placeOrder(option.id, this.props.currentUser, option.qty)}>Place an Order</button>
      </ul>
      </li>
    ));
    return (
      <div className="order-options-index">
        <ul>
          {optionItems}
        </ul>


      </div>
    );

  }
}

export default OrderOptionsIndex;
