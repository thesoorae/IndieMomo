import BatchIndexItem from '../batches/batch_index_item';
import React from 'react';
import Slider from 'react-slick';
import {hashHistory} from 'react-router';

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.startBatch = this.startBatch.bind(this);
  }
  componentDidMount(){
    this.props.fetchBatches();
  }

  startBatch(e){
      e.preventDefault();
      hashHistory.push('/batches/new');
  }

  next(){
    this.slider.slickNext()
  }

  previous(){
    this.slider.slickPrev()
  }

  render(){

    const {batches} = this.props;

    const SampleNextArrow= () => (<i class="fa fa-chevron-left fa-5x" aria-hidden="true"></i>);
    const SamplePrevArrow=() => (<i class="fa fa-chevron-right fa-5x" aria-hidden="true"></i>);

    const settings = {
      // dots:true,
      infinite:true,
      speed:500,
      slidesToShow:4,
      slidesToScroll:4,

    };

    const banner_settings = {
      dots:true,
      infinite: true,
      speed: 300,
      slidesToShow:1,
      slidesToScroll: 1
    }

    const batchItems = batches.map( batch =>
      (<div><BatchIndexItem
        batch={batch}
        key={batch.id} /></div>
    )
  );

    let batchesSlider = "";
    if(batches.length > 0 ){
      batchesSlider = (
        <div className="slider-container">
          <Slider {...settings} ref={c => this.slider =c}>
            {batchItems}
          </Slider>
        </div>
      )
    }


  return(
    <div className="home-container">
      <div onClick={this.startBatch} className="banner clickable">
        <div className="banner-title">
          <strong>
          Get those hard-to-find
          <br />
          foods you had when
          <br />
          you were little
          </strong>
        </div>
      </div>

      <div className="homepage-section">
        <div className="homepage-index-nav">
          <h2>Make Momos and Sell them Online</h2>
        </div>
        <div className="make-instructions">
          <div className="instruction">
            <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582870/icons/think-of-momo.png' />
            1. Know how to make a special momo?
          </div>
          <div className="instruction">
            <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582871/icons/momo-quantity.png' />
              2. Get the orders you need.
          </div>
          <div className="instruction">

            <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/35367-200.png' />
            3. Get cooking!
          </div>
          <div className="instruction">

            <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486582870/icons/sell.jpg' />
            4. Make money.
          </div>
          <div className="get-started">

            <span onClick={this.startBatch} className="get-started-text clickable">
            <h2>Make a
            <br />Batch!</h2></span>
          </div>
        </div>


        <div className="homepage-section">
          <div className="homepage-index-nav">
            <h2>Top Momos for You</h2>
          </div>
          <div className="slider-bar">
          <i className="fa fa-angle-left" aria-hidden="true" onClick={this.previous}></i>
          {batchesSlider}
          <i className="fa fa-angle-right" aria-hidden="true" onClick={this.next}></i>
          </div>
        </div>
        </div>

      </div>
  );
}
}

export default Homepage;
