import React from 'react';

class BatchShow extends React.Component{
  render(){
    const batch = this.props.batch;
    return (
      <div>
        <h1> Batch: </h1>
        {batch.title}
        {batch.description}
        {batch.category}
      </div>
    );
  }
}

export default BatchShow;
