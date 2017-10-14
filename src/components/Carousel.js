import React from 'react';
import Slider from 'react-slick';

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      id="carousel_next_arrow"
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}

class SimpleSlider extends React.Component {

  render() {
  	let ext = /\.[0-9a-z]/;
  	console.log(this.props.photo_count, this.video_src);
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <Slider {...settings}>
        <div>
        	<img className="carousel_img" src={
        		require('../assets/images/'+this.props.project+'/0.jpg')
       		 }/>
        </div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
}

export default SimpleSlider;