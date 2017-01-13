import React from 'react';

class BatchShow extends React.Component{


  render(){
    const batch = this.props.batch;
    console.log(batch);
    return (
      <div>
        <h1> Batch: </h1>
        {batch.title}
        {batch.description}
        {batch.category}
        {batch.qty_in_order}
        <br />
        Order options: {batch.order_options.cost}
      </div>
    );
  }
}

export default BatchShow;
