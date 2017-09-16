import React from 'react';
import { connect } from 'react-redux';
import { hideItem } from '../actions';
import Modal from 'react-modal';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

let Popup = ({ dispatch, show, title, head, body, foot }) => {
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
			style= {{

				content: {
					background: '#FFF',
					border: '6px solid #1700FC',
					borderRadius: 0
				}
			}}
		> 
			<div className="container-fluid modalContainer">
				<div className="modalNav">
					<Button className="modalClose" onClick={ handleClick }>X</Button>
				</div>
				<Col lg={8} className="imageContainer"> Images here </Col>
				<Col lg={4} className="infoContainer">
					<h1 className="modalTitle"> { title } </h1>
					<span className="infoHead">  { head } </span>
					<p className="infoBody">  { body } </p>
					<span className="infoFoot">  { foot } </span>
				</Col>
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