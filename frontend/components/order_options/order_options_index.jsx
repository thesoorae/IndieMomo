import React from 'react';
import {Link} from 'react-router';
import OrderOptionsItem from './order_options_item';

class OrderOptionsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log("orderOptions" , this.props.orderOptions);
    const optionItems =  this.props.orderOptions.map(option => (
      <li className="order-option-item" key={option.id}><ul className="order-option-item" key={option.id}>
      <li className="cost">$ {option.cost}</li>
      <li className="qty">Comes with {option.qty} pieces</li>
      <li className="option-description">{option.description}</li>
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
