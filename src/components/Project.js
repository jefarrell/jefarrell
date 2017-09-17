import React from 'react';
import Col from 'react-bootstrap/lib/Col';



const Project = ({title, style, code, onClick}) => (

	<Col lg={4} xs={12} className="projectParent" onClick={onClick}>
		<div className="dummy"></div>
		<div className="project" style={style}>
			<div className="layer" id={code}></div>
			<span className="projectTitle">
				{title}
			</span>
		</div>
	</Col>
)


export default Project;