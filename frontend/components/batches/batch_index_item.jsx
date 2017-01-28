import React from 'react';
import { withRouter } from 'react-router';
import ProgressBar from './progress_bar';

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

    const mainImage = batch.batch_images.length > 0 ?
    batch.batch_images[0]['url'] :
    "http://res.cloudinary.com/indiemomo/image/upload/v1484614981/default-image_uu7kx4.jpg";



    if(this.props.batch){
        return (
          <div className = "batch-index-item clickable"
            onClick={this.handleClick}>
            <div className="batch-index-item-container">
            <div className="index-item-image">
              <img src={mainImage} />
            </div>
            <div className="index-item-info">
              <ul>
                <li className="category"><h4>{batch.category}</h4></li>
                <li><h3>{batch.title}</h3></li>
                <li>{batch.description}</li>
              </ul>
            </div>
            <div className="progress">
              <ProgressBar batch={batch}/>
            </div>
            </div>
          </div>
      );}
      else{
        return (<div>loading</div>);
      }
  }
}
export default withRouter(BatchIndexItem);
