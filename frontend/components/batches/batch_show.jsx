import React from 'react';
import {Link, hashHistory} from 'react-router';
import OrderOptionsIndex from '../order_options/order_options_index';
import UserSummary from '../users/user_summary';
import ProgressBar from './progress_bar';

class BatchShow extends React.Component{
  constructor(props){
    super(props);
    this.goToEdit = this.goToEdit.bind(this);
  }

  // componentWillReceiveProps(nextProps){
  //   console.log("next props", nextProps);
  //   let batch = nextProps.batch;
  //   // if(batch.batch_images.length <1){
  //   //   batch.batch_images[0]= {url: nextProps.batch.img_url};
  //   // }
  //   this.setState({batch: batch});
  // }
  goToEdit(e){
    e.preventDefault();
    hashHistory.push(`/batches/${this.props.batch.id}/edit`);
  }

  render(){
    let editBatch = "";


    if(this.props.batch){
      const batch = this.props.batch;
          if(this.props.currentUser.id === batch.chef_id){
            editBatch = <button className="clickable edit-batch" onClick={this.goToEdit}>Edit</button>;
          }
      console.log(batch);
      // let mainImage = "http://res.cloudinary.com/indiemomo/image/upload/v1484272483/sample.jpg";
      // if (batch.batch_images[0]){
        const mainImage = batch.batch_images.length > 0 ?
        batch.batch_images[0]['url'] :
        "http://res.cloudinary.com/indiemomo/image/upload/v1484614981/default-image_uu7kx4.jpg";

        let otherImages = "";
        if(batch.batch_images.length >1){

          otherImages = batch.batch_images.map(image => <img className="other-batch-image" key={image.id} src={image.url} />);
          }

      return (
        <div className="batch-show-container">
          <div className="batch-show-summary">
            <div className="left">
              <div className="main-image-container">
                <img className="main-image" src={mainImage} />
              </div>
            </div>
            <div className="right">
              <ul>
                <li><h3 className="color-heading">
                  {batch.category}
                </h3></li>

                <li><h1>{batch.title}</h1></li>
                <li className="batch-description">{batch.description}</li>
                <li >
                  <UserSummary getUser={this.props.getUser} user={batch.chef} />
                </li>
                <li><div className="batch-show-progress">
                  <ProgressBar batch={batch}/>
                </div></li>
              <li>{editBatch}</li>

              </ul>
            </div>
          </div>
          <div className="batch-show-body">
            <div className="left">
              {otherImages}
            </div>
              <div className="right">
                <h3 className="subtitle">Order Options</h3>
                <OrderOptionsIndex batch={batch} orderOptions={batch.order_options} createOrder={this.props.createOrder} currentUser={this.props.currentUser} />
            </div>
          </div>
        </div>
      );
    } else {
      return(<div>loading</div>);
    }
  }
}

export default BatchShow;
