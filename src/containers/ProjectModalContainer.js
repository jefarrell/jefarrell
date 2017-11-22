import React from 'react'
import { connect } from 'react-redux'
import { hideItem } from '../actions'
import ProjectModal from '../components/ProjectModal'


const mapStateToProps = state => {
	return { ...state }
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