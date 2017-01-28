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
        <img src="http://res.cloudinary.com/indiemomo/image/upload/c_lfill,g_south,h_500,w_1000/v1484673961/dumpling_banner_s9d7d5.jpg" />
        <div className="banner-title">
        <strong>
        Find the food you love.
        <br />
        Or create a batch to share,

        <br />

          and get the orders you need.
            </strong>
          </div>
      </div>
        <div className="homepage-batches">
        <div className="batch-index-nav">
          <h2>Top picks for you</h2>
        </div>
        <div className="slider-bar">
        <i className="fa fa-angle-left" aria-hidden="true" onClick={this.previous}></i>

        {batchesSlider}
        <i className="fa fa-angle-right" aria-hidden="true" onClick={this.next}></i>
        </div>
        </div>
      </div>
  );
}
}

export default Homepage;
