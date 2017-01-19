import React from 'react';
import {hashHistory} from 'react-router';
import OrderOptionsForm from './order_options_form';
import OrderOptionsEditIndex from './order_options_edit_index';

class OrderOptionsEdit extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        batch: this.props.batch,
        order_options: this.props.batch.order_options,
        openForm: false};
        this.removeOption = this.removeOption.bind(this);
        this.handleCreateOption = this.handleCreateOption.bind(this);
  }

componentWillReceiveProps(nextProps){
    this.setState({
      batch: nextProps.batch,
      order_options: nextProps.batch.order_options});
  }

renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }



removeOption(id, i){
  return (e) => {
  e.preventDefault();
  let currentOptions = this.state.order_options;
  currentOptions.splice(i, 1);
  this.setState({order_options: currentOptions}, () => {
  this.props.deleteOption(id);});
  };
}

handleCreateOption(newOption){
  
  return (e) => {
  e.preventDefault();
  let currentOptions = this.state.order_options;
  currentOptions.push(newOption);
  this.setState({order_options: currentOptions}, ()=>{
  this.props.createOption(newOption);});
};
}

  render(){
    console.log("state after create option", this.state);

    const new_option = {
      cost: 1,
      qty: 1,
      description:"A great order",
      batch_id: this.state.batch.id
    };

    const batch = this.state.batch;
    const BatchButtons = "";
    // const BatchButtons = <div className="batch-form-buttons"><button className="save clickable" onClick={this.saveBatch}> Save Batch</button>
    //   <button className="launch" onClick={this.launchBatch}>Review & Launch</button></div>;

    return(
      <div className="order-edit-container">
        <div className="batch-buttons-bar">
          <span><h1>Basics</h1></span>
          {BatchButtons}
        </div>
        <div className="order-edit-info">
          <div className="current-options">
            <OrderOptionsEditIndex
              orderOptions={this.state.order_options}
              removeOption={this.removeOption}
              currentUser={this.props.currentUser}
              />
          </div>
        <div className="new-option-form">
              <OrderOptionsForm option={new_option} createOrEdit={this.handleCreateOption} />
        </div>


      </div>
      </div>
    );
  }
}
export default OrderOptionsEdit;
