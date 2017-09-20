import React from 'react';
import { connect } from 'react-redux';
import { showItem } from '../actions';
import projectData from '../assets/projectData';
import Project from '../components/Project';
import ProjectModal from './ProjectModal';


const ProjectGrid = ({ dispatch, target, modal }) => {
	console.log("proj grid")
	// Require context image file
	// Set as style, pass as props to child presentational component
	const images = require.context('../assets/thumbnails', true);
	const dataContainer = projectData["projectData"];

	const handleClick = (e) => {

		let target = e.target.id;
		let title, paragraphs, head, body, footer;
		let data = dataContainer[target];

		[ title, paragraphs, head, body, footer ] = [ 
			data["title"], 
			data["paragraphs"], 
			data["paragraphs"]["head"], 
			data["paragraphs"]["main"], 
			data["paragraphs"]["foot"] 
		]

		dispatch(showItem(target, title, head, body, footer));
	}
	

	return (
		<div className="container-fluid" id="gridContainer">
		<ProjectModal show={modal} />
				{

					Object.keys(dataContainer).map((keyname, keyindex) => {
						let code = dataContainer[keyname]["code"];
						let title = dataContainer[keyname]["title"];

						let imgsrc = images(`./${code}.png`);
						let styler = {
							backgroundImage: `url(${imgsrc})`
						}
						
						return (
							<Project 
								key={keyindex}
								title={title}
								code={code}
								style={styler}
								onClick={handleClick}
							/>
						)

					})
				}	
		</div>	
	) 	
}


const mapStateToProps = (state) => {
	return { 
		target: state.project,
		modal: state.modal 
	}
}


const ProjectContainer = connect(
	mapStateToProps
)(ProjectGrid);

export default ProjectContainer;
