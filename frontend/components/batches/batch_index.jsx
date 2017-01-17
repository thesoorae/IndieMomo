import BatchIndexItem from './batch_index_item';
import React from 'react';

class BatchIndex extends React.Component{

  componentDidMount(){
    this.props.fetchBatches();
  }

  render(){

    const {batches} = this.props;
    const settings = {
      infinite:true,
      speed:500,
      slidesToShow:5,
      slidesToScroll:4
    };

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
