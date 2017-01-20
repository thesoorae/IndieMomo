import BatchIndexItem from '../batches/batch_index_item';
import React from 'react';
import {hashHistory} from 'react-router';

class Results extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.fetchSearchResults(this.props.search);
  }


  render(){

    const {batches} = this.props;


    const batchItems = batches.map( batch =>
      (<div className="batch-item"><BatchIndexItem
        batch={batch}
        key={batch.id} /></div>
    )
  );




  return(
    <div className="index-container">

        <div className="batch-index">


        {batchItems}

        </div>
      </div>
  );
}
}

export default Results;




// import React from 'react';
// import {asArray} from '../../reducers/selectors';
//
// export const Results = (state) => {
//   const batches = asArray(state.batches);
//
//   const batchItems = batches.map( batch =>
//     (<div><BatchIndexItem
//       batch={batch}
//       key={batch.id} /></div>
//   )
// );
// if(batches){
// return (
//   <div className="search-results">
//     <h1>Search Results</h1>
//     {batchItems}
//   </div>
//   );
// }
// };
