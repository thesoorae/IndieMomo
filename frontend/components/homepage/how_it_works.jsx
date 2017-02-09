import React from 'react';
import { hashHistory } from 'react-router';


class Explanation extends React.Component {


  startBatch(){
    hashHistory.replace('/batches/new');
  }

  render(){

    return(
      <div className="explanation">
        <div onClick={this.startBatch} className="banner-explanation">

          <div className="banner-explanation-title">
            <strong>
            Turn your family recipes
            <br />
            into a business.
          </strong>
            <br />
            <button className="start-batch clickable hover-button turquoise" onClick={this.startBatch}>Get Started</button>
          </div>
        </div>

    <div className="explanation-section">

      <h2>Share your favorite
      recipes. Get the orders you need.
      Make money cooking the foods you love.</h2>

    <div className="make-instructions">

      <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582871/icons/momo-quantity.png' />
            1. Decide how many orders you need to make a batch of momos.
        </div>
      </div>
      <div className="make-instructions">
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582929/icons/take-pics.jpg' />
          2. Take pictures and write a good description of your momo.
        </div>
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486583109/icons/take-orders.jpg' />
          3. Give order options to your customers. Sometimes people will want to buy more than one!
        </div>
      </div>
      <div className="make-instructions">
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582870/icons/progress_bar.jpg' />
          4. Your batch is online! Start seeing those orders roll in!
        </div>

        <div className="instruction">
          <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/35367-200.png' />
          5. Once you've hit your order goal, start cooking. Customers will be automatically notified that their momos will be ready within one week.
        </div>
    </div>
  </div>
  </div>

);
  }

}
export default Explanation;
