import React from 'react';

class BatchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.batch;
    this.saveBatch = this.saveBatch.bind(this);
  }

  saveBatch(e){
    e.preventDefault();
    this.props.createBatch(this.state);
  }

  launchBatch(e){
    e.preventDefault();
    this.setState({active: true});
    this.props.updateBatch(this.state);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} class="errors">
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

    const formTitle = this.props.formtype === "new" ? "Create New Batch" : "Edit Your Batch";

    return(
      <div className="batch-form-container">
        <div className="batch-buttons-bar">
          <span><h1>{formTitle}</h1></span>
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
            <input type="text" className="batch-input" onChange={this.update('order_description')} value={this.state.order_description} />
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
