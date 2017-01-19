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
        <form className="options-form-box">
          <h2>Add an order option</h2>
            <ul>
              <li><label>How much does this order cost? &nbsp; &nbsp; </label>
                <div className="cost"><strong className="cost">$</strong>
                  <input type="number" className="cost" value={this.state.cost} onChange={this.update('cost')}/></div></li>
              <li><label>How many pieces are in this order? </label>
              <input type="number" className="qty" value={this.state.qty} onChange={this.update('qty')} /></li>
              <li><label>Brief Description of this order</label> <input type="text" className="description" value={this.state.description} onChange={this.update('description')} /></li>
            <li><button onClick={this.saveOption} className="clickable create-option">Create Option </button></li>
            </ul>
        </form>


    );
  }
}

export default OrderOptionsForm;
