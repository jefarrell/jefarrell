import React from 'react';
import { connect } from 'react-redux';
import { hideItem } from '../actions';
import ProjectModal from '../components/ProjectModal';
const images = require.context('../assets/images', true);

const getImages = projectCode => {
	let tester = "about";
	let aboutImage = images(`./${tester}/${tester}.jpg`);
	//let aboutImage = images(`./${projectCode}.jpg`);
	return aboutImage;
}

const mapStateToProps = state => {
	return { 
		modal: state.modal,
		project: state.project,
		title: state.title,
		head: state.head,
		body: state.body,
		foot: state.foot,
		photos: state.photos,
		images: getImages(state.project)
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