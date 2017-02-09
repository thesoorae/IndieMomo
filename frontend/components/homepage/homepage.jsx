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
  goToAll(e){
      e.preventDefault();
      hashHistory.push('batches/results/a');
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
          Find those hard to find
          <br />
          foods from your
          <br />
          childhood
          </strong>
        </div>
      </div>

      <div className="homepage-section">


        <div className="homepage-section">
          <div className="homepage-index-nav">
            <h2>Top Momos for You</h2>
            <p className="clickable" onClick={this.goToAll}>See All</p>
          </div>
          <div className="slider-bar">
          <i className="fa fa-angle-left" aria-hidden="true" onClick={this.previous}></i>
          {batchesSlider}
          <i className="fa fa-angle-right" aria-hidden="true" onClick={this.next}></i>
          </div>
        </div>
        </div>
        <div className="make-index">

        <div className="homepage-index-nav ">
          <h2>Make Momos and Sell them Online</h2>
        </div>
        <div className="make-instructions">
          <div className="instruction">
            <img src='http://res.cloudinary.com/indiemomo/image/upload/v1486611765/icons/think-of-momo.png' />
            <strong>STEP 1</strong> Know how to make a special momo?
          </div>
          <div className="instruction">
            <img src='http://res.cloudinary.com/indiemomo/image/upload/v1486611765/icons/momo-quantity.png' />
              <strong>STEP 2</strong> Get the orders you need.
          </div>
          <div className="instruction">

            <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/35367-200.png' />
            <strong>STEP 3</strong> Get cooking!
          </div>
          <div className="instruction">

            <img src='http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_200/v1486611765/icons/sell.png' />
            <strong>STEP 4</strong> Make money.
          </div>
          <div className="get-started">

            <span onClick={this.startBatch} className="get-started-text clickable">
            <h3>Make a
            <br />Batch!</h3></span>
          </div>
        </div>
      </div>

      </div>
  );
}
}

export default Homepage;
