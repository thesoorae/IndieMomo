import React from 'react';
import {Link} from 'react-router';
import OrderOptionsIndex from '../order_options/order_options_index';

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
          <img src={mainImage} />
          <ul className="right">
            <li><h3 className="color-heading">
              {batch.category}
            </h3></li>

            <li><h1>{batch.title}</h1></li>
            <li className="batch-description">{batch.description}</li>

            <li className="user">
              <span>User Pic</span>
              <ul className="user-text">
                <li>{batch.chef.username}</li>
                <li>{batch.chef.zip_code}</li>
                <li><Link to={`/users/${batch.chef.id}`}>About</Link></li>
              </ul>
            </li>

          </ul>
        </div>
        <div className="batch-show-body">
        <div className="batch-show-details" />
        <OrderOptionsIndex batch={batch} orderOptions={batch.order_options}/>
        </div>
      </div>
    );
  }
}

export default BatchShow;
