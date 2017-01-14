import React from 'react';
import {Link} from 'react-router';
import OrderOptionsIndex from '../order_options/order_options_index';
import UserSummary from '../users/user_summary';

class BatchShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      batch: this.props.batch
    };
  }


  componentWillReceiveProps(nextProps){
    console.log("next props", nextProps);
    let batch = nextProps.batch;
    if(batch.batch_images.length <1){
      batch.batch_images[0]= {url: nextProps.batch.img_url};
    }
    this.setState({batch: batch});
  }

  render(){


    if(this.state.batch){
      const batch = this.state.batch;
      console.log(batch);
      let mainImage = "http://res.cloudinary.com/indiemomo/image/upload/v1484272483/sample.jpg";
      if (batch.batch_images[0]){
        mainImage = batch.batch_images[0]['url'];}

      return (
        <div className="batch-show-container">
          <div className="batch-show-summary">
            <div className="left">
            <img src={mainImage} />
            </div>
            <div className="right">
              <ul>
                <li><h3 className="color-heading">
                  {batch.category}
                </h3></li>

                <li><h1>{batch.title}</h1></li>
                <li className="batch-description">{batch.description}</li>
                <li >
                  <UserSummary user={batch.chef} />
                </li>

              </ul>
            </div>
          </div>
          <div className="batch-show-body">
            <div className="left" />
              <div className="right">
                <h3 className="subtitle">Order Options</h3>
                <OrderOptionsIndex batch={batch} orderOptions={batch.order_options} createOrder={this.props.createOrder} customerId={this.props.currentUser.id}/>
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
