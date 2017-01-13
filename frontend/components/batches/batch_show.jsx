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
    this.setState({batch: nextProps.batch});
  }
  render(){
    const batch = this.state.batch;
    console.log(batch);
    const mainImage = batch.batch_images[0]['url'];
    console.log("main Image", mainImage);
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
              <OrderOptionsIndex batch={batch} orderOptions={batch.order_options}/>
          </div>
        </div>
      </div>
    );
  }
}

export default BatchShow;
