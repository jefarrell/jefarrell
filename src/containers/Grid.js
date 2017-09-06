import React from 'react';
import { connect } from 'react-redux';
import { showItem } from '../actions';
import projectData from '../assets/projectData';
import Project from '../components/Project';


import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";

let ProjectGrid = ({ dispatch }) => {
	const data = projectData["projectData"];

	// function importAll(r) {
	//   let images = {};
	//     return r.keys().map(r);
	// }
	// const images = importAll(require.context('../assets/thumbnails', false, /\/(png|jpe?g|svg)$/));
	// console.log("images? ", images);

	const images = require.context('../../public/assets/thumbnails', true);
	let imgsrc = images('./myco.png');

	console.log("hm ", imgsrc);

	const styler = {
		backgroundImage: "url("+imgsrc+")"
	}



	return (		
		<div className="container-fluid">
			<Row>
				{
					Object.keys(data).map((keyname, keyindex)=> {
						let title = data[keyname]["title"];
						let code = data[keyname]["code"];
						return <Project 
									key={keyindex}
									title={title} 
									style={styler} 
								/>
					})
				}	
			</Row>		
		</div>	
	) 	
}


ProjectGrid = connect()(ProjectGrid);

export default ProjectGrid;
