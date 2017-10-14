import React from 'react';
import { connect } from 'react-redux';
import { hideItem } from '../actions';
import ProjectModal from '../components/ProjectModal';
//const images = require.context('../assets/images', true);

const getImages = (r, projectCode) => {
	let tester = "about";
	console.log("r: ", r, " proj: ", projectCode);
	if(projectCode) {
		console.log("in here");
		let images = {};
  		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  		console.log("images: ", images);
  		return images;
	}
	
	//let aboutImage = images(`./${tester}/${tester}.jpg`);
	//let aboutImage = images(`./${projectCode}.jpg`);
	
	//return aboutImage;
}

const imgs = getImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/), 'belieber');


const mapStateToProps = state => {
	return { 
		modal: state.modal,
		project: state.project,
		title: state.title,
		head: state.head,
		body: state.body,
		foot: state.foot,
		photos: state.photos,
		images: null
		//images: getImages(imgs,state.project)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: () => {
			dispatch(hideItem())
		}
	}
}

const ProjectModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectModal);


export default ProjectModalContainer;