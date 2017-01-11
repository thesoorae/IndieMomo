import BatchIndexItem from './batch_index_item';
import React from 'react';

class BatchIndex extends React.Component{

  componentDidMount(){
    this.props.fetchBatches();
  }

  render(){
    
    const {batches} = this.props;
    const batchItems = batches.map( batch =>
      (<BatchIndexItem
        batch={batch}
        key={batch.id} />
    )
  );

  return(
      <section className="batch-index">
      <h1>Batches</h1>
      {batchItems}
    </section>
  );
}
}

export default BatchIndex;
