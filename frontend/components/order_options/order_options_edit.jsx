import React from 'react';
import {hashHistory} from 'react-router';
import OrderOptionsForm from './order_options_form';

class OrderOptionsEdit extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        order_options: this.props.batch.order_options,
        openForm: false};
  }

componentWillReceiveProps(nextProps){
    this.setState({order_options: nextProps.batch.order_options});
  }

  saveOption(e){
    e.preventDefault();
    this.props.updateOption(this.state);
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
      batch_id: this.props.batch.id
    };

    const BatchButtons = <div className="batch-form-buttons"><button className="save clickable" onClick={this.saveBatch}> Save Batch</button>
      <button className="launch" onClick={this.launchBatch}>Review & Launch</button></div>;

    return(
      <div className="batch-form-container">
        <div className="batch-buttons-bar">
          <span><h1>Basics</h1></span>
          {BatchButtons}
        </div>
        <div className="form-box">
            <button onClick={this.createNewOption} className="create-new-option">Create New Option </button>
            <OrderOptionsForm option={new_option} createOrEdit={this.props.createOption} />


        </div>


      </div>
    );
  }
}
export default OrderOptionsEdit;
