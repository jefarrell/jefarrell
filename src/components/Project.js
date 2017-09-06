import React from 'react';
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";



const Project = ({title, style}) => (



	<Col lg={4} style={style}>
		{title}
	</Col>
)

export default Project;