import BatchIndexItem from '../batches/batch_index_item';
import React from 'react';
import Slider from 'react-slick';

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  componentDidMount(){
    this.props.fetchBatches();
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
      <div className="banner">
        <img src="http://res.cloudinary.com/indiemomo/image/upload/c_lfill,g_south,h_500,w_1000/v1484673961/dumpling_banner_s9d7d5.jpg" />
        <span className="banner-title">
        <h2>Your family recipes.<span className='spacer' /></h2>
          <br />
          <h2>Start your batch today.</h2>
          </span>
      </div>
        <div className="homepage-batches">
        <div className="batch-index-nav">
          <h2>Top picks for you</h2>
        </div>
        <div className="slider-bar">
        <i className="fa fa-chevron-left" aria-hidden="true" onClick={this.previous}></i>

        {batchesSlider}
        <i className="fa fa-chevron-right" aria-hidden="true" onClick={this.next}></i>
        </div>
        </div>
      </div>
  );
}
}

export default Homepage;
