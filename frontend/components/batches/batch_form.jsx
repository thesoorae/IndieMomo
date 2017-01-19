import React from 'react';
import {hashHistory} from 'react-router';
import UploadButton from '../images/upload_button';
import {ImageList} from '../images/image_list';

class BatchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {

      batch: this.props.batch,
      images: []
    };
    this.saveBatch = this.saveBatch.bind(this);
    this.launchBatch = this.launchBatch.bind(this);
    this.postImage = this.postImage.bind(this);
    this.addOptions = this.addOptions.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }



  componentWillReceiveProps(nextProps){
    console.log("next props", nextProps);
    this.setState({
      batch: nextProps.batch,
      images: nextProps.batch.batch_images});
  }

  saveBatch(e){
    e.preventDefault();
    this.props.updateBatch({
      batch: this.state.batch});
  }

  update(type){
    console.log("updating something");
    return (e) => {
      let batch = this.state.batch;
      batch[type] = e.target.value;
      this.setState({batch});
    };
  }


  launchBatch(e){
    e.preventDefault();
    let batch = this.state.batch;
    batch.active = true;
    this.setState({batch}, () => {
      this.props.updateBatch(this.state).then(hashHistory.replace(`/batches/${batch.id}`));
  });}

  addOptions(e){
    e.preventDefault();
    hashHistory.push(`/batches/${this.props.batchId}/options/edit`);
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


  postImage(images){
    let newimages = this.state.images;

    images.forEach(image => {
      let data = {
        url: image.url };
        newimages.push(data);
      });

    this.setState({images: newimages});
    }

    removeImage(i){
      return (e) => {
        e.preventDefault();
        let newimages = this.state.images;
        newimages.splice(i, 1);
        this.setState({images: newimages});
      };
    }


  render(){

  if(this.props.batch){
    const CATEGORIES = ["Taiwanese", "Chinese", "Filipino", "Thai", "Vietnamese", "Cambodian", "Cantonese", "Korean", "Other"]


    const BatchButtons = <div className="batch-form-buttons"><button className="save clickable" onClick={this.saveBatch}> Save Batch</button>
      <button className="options clickable" onClick={this.addOptions}>Add Options</button>
      <button className="launch" onClick={this.launchBatch}>Launch & Start</button></div>;

    const batch = this.state.batch;

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
              value={batch.title}
              placeholder={this.props.formtype === "new" ? "What is your snack called?" : ""}/>
            </label>
            <br />

              <label>
                Product Description
                <br />
                <textarea
                  className="batch-input"
                  onChange={this.update('description')}
                  value={batch.description}
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
                value={batch.goal}
                placeholder="How many do you want to sell?"/>
            </label>
            <br />
            <div className="img-list">
            <label>
              Image URL
              <br />
              <UploadButton postImage={this.postImage} />
              </label>
            <ImageList images={this.state.images} removeImage={this.removeImage}/>
            </div>
            <br />

            <label>
          Pick Up Location
          <input type="text"
            className="batch-input"
            onChange={this.update('zip_code')}
            value={batch.zip_code}
            placeholder="The zip code where customers can pick up their orders" />
          </label>
          <br />

        <label>
        Food Type
          <select value={batch.category} onChange={this.update('category')}>
          <option value="Uncategorized">Select a Category</option>
          {CATEGORIES.map(category => (<option value={category} key={category}>{category}</option>))}
          </select>
      </label>
    </form>
  </div>
  </div>
    );} else {
      return(<div>loading</div>);
    }
  }
}

export default BatchForm;

// <div className="options-container">{batch.order_options.map((option, i) => (
//     <div className="option-box" key={option.id}>
//       <h2>Order Option {i+1}</h2>
//       <div id="cost" className='option-input-label'>
//         <h3>$</h3>
//         <input id="cost" className="option-input" type="number" onChange={this.updateOptions(i, 'cost')} value={option.cost} />
//         </div>
//       <label className='option-input-label'>
//         How many pieces are in this order?
//       <input className="option-input" type="number" onChange={this.updateOptions(i, 'qty')} value={option.qty} />
//       </label>
//       <label className='option-input-label'>
//         Brief Description
//       <input className="option-input" type="text" onChange={this.updateOptions(i, 'description')} value={option.description} />
//       </label>
//     </div>
//     ))}
// </div>
