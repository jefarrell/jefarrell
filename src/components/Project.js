import React from 'react';
import PropTypes from 'prop-types';

const Project = (props) => (
	<div className="project" onClick={props.onClick}>
		<div className="project_dummy"></div>
		<div className="project_container" style={props.style}>
			<div className="project_layer" id={props.code}></div>
			<span className="project_title">
				{props.title}
			</span>
		</div>
	</div>
)


Project.propTypes = {
	onClick: PropTypes.func.isRequired,
	style: PropTypes.object.isRequired,
	code: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default Project;