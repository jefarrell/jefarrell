import React from 'react';
import { connect } from 'react-redux';
import { showItem } from '../actions';
import projectData from '../assets/projectData';
import Project from '../components/Project';


import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";

let ProjectGrid = ({ dispatch }) => {
	const data = projectData["projectData"];

	// Require context image file
	// Set as style, pass as props to child presentational component
	const images = require.context('../../public/assets/thumbnails', true);
	
	const handleClick = e => {
		console.log("CLICKED ", e.target.id);
		dispatch(showItem(e.target.id));
	}


	return (
		<div className="container-fluid" id="gridContainer">
				{
					Object.keys(data).map((keyname, keyindex)=> {

						let code = data[keyname]["code"];
						let title = data[keyname]["title"];
						let imgsrc = images("./"+code+".png");

						let styler = {
							backgroundImage: "url(" + imgsrc + ")"
						}

						return <Project 
									key={keyindex}
									title={title}
									code={code}
									style={styler}
									onClick={handleClick}
								/>
					})
				}	
				
		</div>	
	) 	
}


ProjectGrid = connect()(ProjectGrid);

export default ProjectGrid;
