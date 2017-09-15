import React from 'react';
import { connect } from 'react-redux';
import { hideItem } from '../actions';
import Modal from 'react-modal';


let ProjectModal = ({ dispatch, show, title }) => {


	const handleClick = () => {
		console.log("clicked");
		dispatch(hideItem());
	}


	return (
		<Modal
			isOpen={show}
			shouldCloseOnOverlayClick={true}
			contentLabel="Modal"
			onClick={handleClick}
		> 
			<button onClick={handleClick}>X</button>
			<h1>{title} </h1>


		</Modal>
	)

}



ProjectModal = connect()(ProjectModal)


export default ProjectModal;