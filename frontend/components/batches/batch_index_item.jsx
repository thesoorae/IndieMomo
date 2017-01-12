import React from 'react';
import { withRouter } from 'react-router';

class BatchIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const batchId = this.props.batch.id;
    this.props.router.push(`batches/${batchId}`);
  }

  render(){


    const batch = this.props.batch;
    return (
      <div className = "batch-index-item"
        onClick={this.handleClick}>
        <div className="index-item-info">

          <span className="index-item-category"> Title: </span>
          <span className="index-item-copy">
            {batch.title}
          </span>

          <span className="index-item-category"> Description: </span>
          <span className="index-item-copy">
            {batch.description}
          </span>


          <span className="index-item-category"> Goal: </span>
          <span className="index-item-copy">
            {batch.goal}
          </span>


          <span className="index-item-category"> Chef: </span>
          <span className="index-item-copy">
            {batch.chef.username}
          </span>

          <span className="index-item-category"> Active: </span>
          <span className="index-item-copy">
            {`${batch.active}`}
          </span>

          <span className="index-item-category"> Order quantity: </span>
          <span className="index-item-copy">
            {batch.qty_in_order}
          </span>

        </div>
      </div>
    );
  }
}
export default withRouter(BatchIndexItem);
