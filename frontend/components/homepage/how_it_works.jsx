import React from 'react';

class Explanation extends React.Component {
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
        </div>
      </div>

    <div className="homepage-section">
      <div className="homepage-index-nav">
        <h2>Make your Own Momos</h2>
      </div>
      <div className="make-instructions">
        <div className="instruction">
          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582870/icons/think-of-momo.png' />
          1. Think about what you love to cook.
        </div>
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582871/icons/momo-quantity.png' />
            2. Decide how many orders you need to make a batch.
        </div>
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582929/icons/take-pics.jpg' />
          3. Take pictures and write a good description of your momo.
        </div>
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486583109/icons/take-orders.jpg' />
          4. Give order options to your customers. Sometimes people will want to buy more than one!
        </div>
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582870/icons/progress_bar.jpg' />
          5. Your batch is online! Start tracking your orders!
        </div>
        <div className="instruction">

          <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/35367-200.png' />
          6. Get cooking!
        </div>
        <div className="instruction">

          <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582870/icons/sell.jpg' />
          7. Get paid for making delicious momos.
        </div>
        </div>
    </div>
    </div>

    )
  }

}
export default Explanation;
