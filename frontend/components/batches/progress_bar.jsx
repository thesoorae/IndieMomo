import React from 'react';

class ProgressBar extends React.Component {
  render(){
    const batch = this.props.batch;
    let percentage = (batch.total_orders / batch.goal)*100;
    let percentbar = `${percentage} %`;
    let nonpercentbar = `${100-percentage} %`;
    console.log("%" , percentage);
    return(

    <div></div>
  );
  }
}
export default ProgressBar;
// <div className="progress" width={percentbar} />
// <div className="no-progress" width={nonpercentbar} />
