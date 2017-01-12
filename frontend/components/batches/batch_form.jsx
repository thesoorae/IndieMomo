import React from 'react';
import {hashHistory} from 'react-router';

class BatchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.batch;
    this.saveBatch = this.saveBatch.bind(this);
    this.launchBatch = this.launchBatch.bind(this);
  }

  componentWillUpdate(nextProps, nextState){
    console.log("this.props", this.props);
    console.log("next props", nextProps);
  }


  componentDidUpdate(prevProps){
  console.log("did update");
  console.log("previous props", prevProps);
  console.log("this.props from component did update", this.props);
}

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.batch);
  }

  saveBatch(e){
    e.preventDefault();
    this.props.updateBatch(this.state);
  }

  update(type){
    console.log("updating something");
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  updateOptions(i, attr){
    return (e) => {
      let order_options = this.state.order_options;
      order_options[i][attr] = e.target.value;
      this.setState({order_options});
    };
  }

  launchBatch(e){
    e.preventDefault();
    this.setState({active: true},
    () => {
      this.props.updateBatch(this.state);
      hashHistory.replace(`/batches/${this.props.batchId}`);
  });}

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

  render(){

    console.log("current component state", this.state);
    console.log("this.props.batch", this.props.batch);
    const BatchButtons = <div className="batch-form-buttons"><button onClick={this.saveBatch}> Save </button>
      <button onClick={this.launchBatch}>Launch</button></div>;


    let totalPieces = this.state.qty_in_order * this.state.goal;
    return(
      <div className="batch-form-container">
        <div className="batch-buttons-bar">
          <span><h1>Basics</h1></span>
          {BatchButtons}
        </div>
        <div className="form-box">
          <form>
            <label>
              Product Name
              <br />
              <input
              type="text"
              className="batch-input"
              onChange={this.update('title')}
              value={this.state.title}
              placeholder={this.props.formtype === "new" ? "What is your snack called?" : ""}/>
            </label>
            <br />

              <label>
                Product Description
                <br />
                <textarea
                  className="batch-input"
                  onChange={this.update('description')}
                  value={this.state.description}
                  placeholder="Describe your snack in detail. What ingredients do you use? Is it sweet or salty? Is there a filling? Are they frozen, fresh, or dried?">
                </textarea>
              </label>
              <br />


            <label>
              Order Goal Amount
              <br />
              <input
                type="text"
                className="batch-input"
                onChange={this.update('goal')}
                value={this.state.goal}
                placeholder="How many do you want to sell?"/>
            </label>
            <br />

          <label>
            How many pieces are in one order?
            <span className="one-line-span">
            <input
              type="number"
              className="batch-input"
              onChange={this.update('qty_in_order')}
              value={this.state.qty_in_order}
              placeholder="How many do you want to sell?"/>
              You will need to make {totalPieces} in this batch! </span>
            </label>

            <br />



            <label>
          Pick Up Location
          <input type="text"
            className="batch-input"
            onChange={this.update('zip_code')}
            value={this.state.zip_code}
            placeholder="The zip code where customers can pick up their orders" />
          </label>
          <br />

        <label>
        Food Type
          <select value={this.state.category} onChange={this.update('category')}>
          <option value="Uncategorized">Select a Category</option>
          <option value="Taiwanese">Taiwanese</option>
          <option value="Cantonese">Cantonese</option>
          <option value="Chinese">Chinese</option>
          <option value="Thai">Thai</option>
        </select>
      </label>


      <div className="options-container">{this.state.order_options.map((option, i) => (
          <div className="option-box">
            <h2>Option {i+1}</h2>
            <span>What is included in this type of order?</span>
            <input className="option-input" type="number" onChange={this.updateOptions(i, 'cost')} value={option.cost} />
            <input className="option-input" type="number" onChange={this.updateOptions(i, 'qty')} value={option.qty} />
            <input className="option-input" type="text" onChange={this.updateOptions(i, 'description')} value={option.description} />
            </div>
          ))}
      </div>

          </form>

        </div>


      </div>
    );
  }
}
export default BatchForm;
