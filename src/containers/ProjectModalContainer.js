import React from 'react'
import { connect } from 'react-redux'
import { hideItem } from '../actions'
import ProjectModal from '../components/ProjectModal'


const mapStateToProps = state => {
	return { 
		modal: state.modal,
		project: state.project,
		title: state.title,
		head: state.head,
		body: state.body,
		foot: state.foot,
		photo_count: state.photo_count, 
		videos: state.videos, 
		video_count: state.video_count, 
		video_src: state.video_src
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