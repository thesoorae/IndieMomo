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
  update(type){
    return (e) => {
      this.setState({[type]: e.target.value});
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

  render(){
    console.log(this.state);

      return(
      <div className="batch-form-container">
        <span className="title"><h1>Start a batch</h1>
          <h4>Get the orders you need to make some great food!</h4>
          </span>
          <div className="form-box">
            {this.renderErrors()}

            <form>
              <label>
                What food are you making?
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
                  How many orders do you need?
                  <br />
                  <input
                    type="text"
                    className="batch-input"
                    onChange={this.update('goal')}
                    value={this.state.goal}
                    />
                </label>
                <br />
                <button onClick={this.saveBatch}> CREATE MY BATCH </button>
              </form>

            </div>
        </div>

    );
  }
}
export default BatchForm;
