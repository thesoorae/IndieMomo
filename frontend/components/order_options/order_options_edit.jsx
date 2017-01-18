import React from 'react';
import {hashHistory} from 'react-router';

class OrderOptionsForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      new_option: {
        cost: 1,
        qty: 1,
        description:"A great order",
        batch_id: this.props.batch.id
      },
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

  update(type){
    console.log("updating something");
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  updateOptions(attr){
    return (e) => {
      let new_option = this.state.new_option;
      new_option[attr] = e.target.value;
      this.setState({new_option});
    };
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



    const BatchButtons = <div className="batch-form-buttons"><button className="save clickable" onClick={this.saveBatch}> Save Batch</button>
      <button className="launch" onClick={this.launchBatch}>Review & Launch</button></div>;

    let newForm = "";
      if(this.state.new_form === true){
        let option = this.state.new_option;
        newForm = (
          <div className="option-box">
            <h2>New Order Option</h2>
            <form>
              <div id="cost" className='option-input-label'>
                <h3>$</h3>
                <input id="cost" className="option-input" type="number" onChange={this.updateOption('cost')} value={option.cost} />
                </div>
                <label className='option-input-label'>
                How many pieces are in this order?
              <input className="option-input" type="number" onChange={this.updateOptions('qty')} value={option.qty} />
              </label>
              <label className='option-input-label'>
                Brief Description
              <input className="option-input" type="text" onChange={this.updateOptions('description')} value={option.description} />
              </label>
            </form>
          </div>
        );
      }

    return(
      <div className="batch-form-container">
        <div className="batch-buttons-bar">
          <span><h1>Basics</h1></span>
          {BatchButtons}
        </div>
        <div className="form-box">
            {newForm}
            <button onClick={this.createNewOption} className="create-new-option">Create New Option </button>



        </div>


      </div>
    );
  }
}
export default OrderOptionsForm;
