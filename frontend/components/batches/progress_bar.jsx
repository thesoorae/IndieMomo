import React from 'react';
import {Line} from 'rc-progress';


class ProgressBar extends React.Component {
  render(){
    const batch = this.props.batch;
    let percentage = (batch.total_orders / batch.goal)*100;

    return(
      <ul>
        <li><strong>{batch.total_orders} orders </strong> out of {batch.goal}</li>
        <li><Line percent={percentage} trailWidth="5" strokeWidth="5" strokeColor="red" strokeLinecap="square" /></li>
        <li className="percentage">{percentage} %</li>
      </ul>
  );
  }
}
export default ProgressBar;
// <div className="progress" width={percentbar} />
// <div className="no-progress" width={nonpercentbar} />
