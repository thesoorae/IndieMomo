import BatchIndexItem from './batch_index_item';
import React from 'react';
import Slider from 'react-slick';

class BatchIndex extends React.Component{

  componentDidMount(){
    this.props.fetchBatches();
  }

  render(){

    const {batches} = this.props;


    const batchItems = batches.map( batch =>
      (<div><BatchIndexItem
        batch={batch}
        key={batch.id} /></div>
    )
  );

  return(
    <div className="batch-index">
    <h1>Batches</h1>
    {batchItems}
    </div>
    


  );
}
}

export default BatchIndex;
// <div className="batch-index">
// <h1>Batches</h1>
// <div className="slider-container">
//   <Slider {...settings}>
//     {batchItems}
//   </Slider>
// </div>
// </div>
