import React from 'react';
import Col from 'react-bootstrap/lib/Col';



const Project = ({title, style, code, onClick}) => (

	<Col lg={4} xs={12} className="project" onClick={onClick}>
		<div className="project_dummy"></div>
		<div className="project_container" style={style}>
			<div className="project_layer" id={code}></div>
			<span className="project_title">
				{title}
			</span>
		</div>
	</Col>
)


export default Project;