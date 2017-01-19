import React from 'react';
import {hashHistory} from 'react-router';

class OrderOptionsForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.option;
    this.saveOption = this.saveOption.bind(this);
  }

saveOption(e){
    e.preventDefault();
    this.props.createOrEdit(this.state);
  }

update(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

render(){
  let option = this.state;
  console.log(option);
    return(
      <div className="options-form-container">
        <h2>New Option</h2>
        <div className="options-form-box">
          <form>
            <ul>
              <li><strong className="cost">$</strong> <input type="number" className="cost" value={this.state.cost} onChange={this.update('cost')}/></li>
              <li><label>How many pieces are in this order? </label><input type="number" value={this.state.qty} onChange={this.update('qty')} /></li>
              <li><label>  Brief Description of your order</label> <input type="text" className="description" value={this.state.description} onChange={this.update('description')} /></li>
            </ul>
            <button onClick={this.saveOption} className="clickable create-option">Create Option </button>
        </form>
      </div>


      </div>
    );
  }
}

export default OrderOptionsForm;
