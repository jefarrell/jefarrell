import React from 'react';
import { connect } from 'react-redux';
import { showItem } from '../actions';
import projectData from '../assets/projectData';
import Project from '../components/Project';
import ProjectModal from './ProjectModal';


import Grid from "react-bootstrap/lib/Grid";


const ProjectGrid = ({ dispatch, target, modal }) => {
	const data = projectData["projectData"];

	// Require context image file
	// Set as style, pass as props to child presentational component
	const images = require.context('../../public/assets/thumbnails', true);
	
	const handleClick = (e, arg) => {
		dispatch(showItem(e.target.id, arg));
	}
	

	return (
		<div className="container-fluid" id="gridContainer">
		<ProjectModal show={modal} title={target}/>
				{

					Object.keys(data).map((keyname, keyindex)=> {
						let code = data[keyname]["code"];
						let title = data[keyname]["title"];
						let imgsrc = images("./"+code+".png");

						let styler = {
							backgroundImage: "url(" + imgsrc + ")"
						}
						
						
						return (
							<Project 
									key={keyindex}
									title={title}
									code={code}
									style={styler}
									onClick={(e)=>handleClick(e,true)}
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
