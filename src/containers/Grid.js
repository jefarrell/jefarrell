import React from 'react';
import { connect } from 'react-redux';
import { showItem } from '../actions';
import projectData from '../assets/projectData';
import Project from '../components/Project';

let Grid = ({ dispatch }) => {
	const data = projectData["projectData"];
	return (		
		<ul>	
			{
				Object.keys(data).map((keyname, keyindex)=> {
					let title = data[keyname]["title"];
					
					return <Project key={keyindex} title={title} />
				})
			}			
		</ul>	
	) 	
}


Grid = connect()(Grid);

export default Grid;
