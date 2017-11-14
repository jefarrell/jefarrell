import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
const imgs = require.context('../assets/images', true);

function NextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={ className }
			id="modal_carousel_next_arrow"
			style={{...style, display: 'block', fill: 'red'}}
			onClick={ onClick }
	    ></div>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={ className }
            id="modal_carousel_prev_arrow"
			style={{...style, display: 'block'}}
			onClick={ onClick } 
		></div>
	);
}

class SimpleSlider extends React.Component {

  	render() {

    	let settings = {
      		dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
            lazyLoad: true,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />
    	};

    	const types = ["jpg", "jpeg", "png", "gif"];
    	let project = this.props.project;

    	// Slider with video iframes
    	if(this.props.videos) {
    		let images = [];
    		
    		this.props.video_src.map((v, vIndex) => {
    			images.push(
	    			<div key={ v } className="modal_carousel_video_container">
	    				<iframe 
                            src={ v } 
                            className="modal_carousel_video"
		    				title="project video" 
		    				width="85%"
                            height="400" 
		    				frameBorder="0"
		    			/>
	    			</div>
    			)
    		})

    		for(let i = 0; i < this.props.photo_count; i++) {
    			types.map(type => {
    				try {
    					images.push(
    						<div key={ i }>
    							<img 
    								className="modal_carousel_img" 
    								src={ imgs(`./${project}/${project+i}.${type}`) }
    								/>
    						</div>
    					)
    				}
    				catch(e){
    					// intentionally empty
                        // exceptions here are the result of looking for images by each file type
    				}
    			})
    		}

    		return (
		      <Slider { ...settings }>
				{ images }
		      </Slider>
		    );


    	// Slider with just images
    	} else {
    		let images = [];
    		for(let i = 0; i < this.props.photo_count; i++) {
    			types.map(type => {
    				try {
    					images.push(
    						<div key={ i }>
    							<img 
    								className="modal_carousel_img" 
    								src={ imgs(`./${project}/${project+i}.${type}`) }
    								/>
    						</div>
    					)
    				}
    				catch(e){
                        // intentionally empty
                        // exceptions here are the result of looking for images by each file type
    				}
    			})
    		}
    		
    		return (
		      <Slider { ...settings }>
		        { images }
		      </Slider>
		    );
    	}  
    }
}

SimpleSlider.propTypes = {
    project: PropTypes.string,
    photo_count: PropTypes.number,
    videos: PropTypes.bool,
    video_src: PropTypes.array
}




export default SimpleSlider;