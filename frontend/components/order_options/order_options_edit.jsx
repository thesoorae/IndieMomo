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
        this.launchBatch = this.launchBatch.bind(this);
        this.backToEdit = this.backToEdit.bind(this);
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



removeOption(option, i){

  let currentOptions = this.state.order_options;
  currentOptions.splice(i, 1);
  this.setState({order_options: currentOptions}, () => {
  this.props.deleteOption(option);});

}

handleCreateOption(newOption){
  console.log("new option", newOption);
  let currentOptions = this.state.order_options;
  currentOptions.push(newOption);
  this.setState({order_options: currentOptions}, ()=>{
  this.props.createOption(newOption);});
}

launchBatch(e){
  e.preventDefault();
  let batch = this.state.batch;
  batch.active = true;
  this.setState({batch}, () => {
    this.props.updateBatch(this.state).then(hashHistory.replace(`/batches/${batch.id}`));
});}

backToEdit(e){
  e.preventDefault();
  hashHistory.replace(`/batches/${this.props.batchId}/edit`);
}

  render(){
    console.log("state after create option", this.state);

    const new_option = {
      cost: 1,
      qty: 1,
      description:"A great order",
      batch_id: this.props.batchId
    };

    const batch = this.state.batch;

    // const BatchButtons = <div className="batch-form-buttons"><button className="save clickable" onClick={this.saveBatch}> Save Batch</button>
    //   <button className="launch" onClick={this.launchBatch}>Review & Launch</button></div>;

    return(
      <div className="batch-form-container">
        <div className="batch-buttons-bar">
          <span><h1>Batch Order Options</h1></span>
          <button className="edit-batch clickable" onClick={this.backToEdit}>Back to Edit</button>
          <button className="show-batch clickable" onClick={this.launchBatch}>Launch Batch</button>
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
