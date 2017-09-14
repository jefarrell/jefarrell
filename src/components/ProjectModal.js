import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const ProjectModal = ({ show, title }) => {

	return (
		<Modal
			isOpen={show}
			closeTimeoutMS={15}
			contentLabel="MOdal"
		> 
			<h1>{title} </h1>
		</Modal>
	)

}

export default ProjectModal;