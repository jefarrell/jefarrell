import React from 'react';
import { connect } from 'react-redux';
import { hideItem } from '../actions';
import Modal from 'react-modal';


let Popup = ({ dispatch, show, title, head, body, foot, photos }) => {
	const images = require.context('../../public/assets/images', true);

	const handleClick = () => {
		dispatch(hideItem());
	}
	

	return (
		<Modal
			isOpen={show}
			shouldCloseOnOverlayClick={true}
			contentLabel="Modal"
			onClick={handleClick}
		> 
			<div>
				<div>
					<button onClick={ handleClick }>X</button>
					<h1> { title } </h1>
				</div>
				<div> Images here </div>
				<div>
					<h2> { title } </h2>
					<p>  { head } </p>
					<p>  { body } </p>
					<p>  { foot } </p>
				</div>
			</div>

		</Modal>
	)

}

const mapStateToProps = (state) => {
	return { 
		title: state.title,
		head: state.head,
		body: state.body,
		foot: state.foot,
		photos: state.photos
	}
}


const ProjectModal = connect(
	mapStateToProps
)(Popup);


export default ProjectModal;