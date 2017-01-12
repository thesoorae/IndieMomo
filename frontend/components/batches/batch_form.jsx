import React from 'react';
import {hashHistory} from 'react-router';

class BatchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.batch === undefined ? {} : this.props.batch;
    this.saveBatch = this.saveBatch.bind(this);
    this.launchBatch = this.launchBatch.bind(this);
  }


  saveBatch(e){
    e.preventDefault();
    this.props.updateBatch(this.state);
  }

  update(type){
    return (e) => {
      this.setState({[type]: e.target.value});
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
    console.log(this.state);
    const BatchButtons = <div className="batch-form-buttons"><button onClick={this.saveBatch}> Save </button>
      <button onClick={this.launchBatch}>Launch</button></div>;

    let NumberDropdown = '';
    for(let i=1; i<101; i++){
      NumberDropdown += `<option value='${i}'> ${i} </option>`;
    }
    let totalPieces = this.state.qty_in_order * this.state.goal;
    console.log(totalPieces);
    return(
      <div className="batch-form-container">
        <div className="batch-buttons-bar">
          <span><h1>Basics</h1></span>
          {BatchButtons}
        </div>
        {this.renderErrors()}
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
          <input type="text" className="batch-input" onChange={this.update('zip_code')} value={this.state.zip_code} placeholder="The zip code where customers can pick up their orders" />
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

          </form>

        </div>


      </div>
    );
  }
}
export default BatchForm;
