import React from 'react';
import {hashHistory} from 'react-router';
import OrderOptionsForm from './order_options_form';
import OrderOptionsIndex from './order_options_index';

class OrderOptionsEdit extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        batch: this.props.batch,
        order_options: this.props.batch.order_options,
        openForm: false};
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

newOptionForm(e){
  e.preventDefault();
  this.setState=({openForm: true});
}

  render(){

    const new_option = {
      cost: 1,
      qty: 1,
      description:"A great order",
      batch_id: this.state.batch.id
    };

    const batch = this.state.batch;

    const BatchButtons = <div className="batch-form-buttons"><button className="save clickable" onClick={this.saveBatch}> Save Batch</button>
      <button className="launch" onClick={this.launchBatch}>Review & Launch</button></div>;

    return(
      <div className="order-edit-container">
        <div className="batch-buttons-bar">
          <span><h1>Basics</h1></span>
          {BatchButtons}
        </div>
        <div className="order-edit-info">
        <div className="left">
          <div className="form-box">
              <button onClick={this.createNewOption} className="create-new-option">Create New Option </button>
              <OrderOptionsForm option={new_option} createOrEdit={this.props.createOption} />
          </div>
        </div>
        <div className="right">
        <div className="current-options">
          <OrderOptionsIndex
            batch={batch}
            orderOptions={batch.order_options}
            createOrder={()=>{}}
            currentUser={this.props.currentUser}
            increaseProgress={()=>{}}
            />
        </div>
        </div>
      </div>
      </div>
    );
  }
}
export default OrderOptionsEdit;
