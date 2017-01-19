import React from 'react';
import {Link, hashHistory} from 'react-router';

class OrderOptionsEditIndex extends React.Component{
  constructor(props){
    super(props);

    this.handleRemoveOption = this.handleRemoveOption.bind(this);
  }


  handleRemoveOption(option, i){

    return (e) => {
      e.preventDefault();
      this.props.removeOption(option, i);
    };
  }


  render(){
    console.log("orderOptions" , this.props.orderOptions);
    const optionItems =  this.props.orderOptions.map((option, i) => (
      <div className="edit-option-item-container" key={option.id}>
        <ul className="edit-option-item" key={option.id}>
          <li className="cost">$ {option.cost}</li>
          <li className="qty">You get {option.qty} pieces with this order!</li>
          <li className="option-description">{option.description}</li>
          <li className="remove-option-container">
            <button className="remove-option" onClick={this.handleRemoveOption(option, i)}>Remove</button></li>
        </ul>
    </div>
    ));
    return (
      <div className="order-options-index">
          {optionItems}



      </div>
    );

  }
}

export default OrderOptionsEditIndex;
