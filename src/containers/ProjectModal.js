import React from 'react';
import { connect } from 'react-redux';
import { hideItem } from '../actions';
import Modal from 'react-modal';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

let Popup = ({ dispatch, show, project, title, head, body, foot }) => {
	const images = require.context('../assets/images', true);
	let aboutImage = images("./about.jpg");

	const handleClick = () => {
		dispatch(hideItem());
	}



	if (project === 'About') {

			return (
				<Modal
					isOpen={show}
					shouldCloseOnOverlayClick={true}
					contentLabel="Modal"
					onClick={handleClick}
					style= {{
						overlay: {
							background: 'rgba(252,215,0,0.55)'
						},
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
						<div className="aboutModalInfo">
							<img src={aboutImage} className="aboutImage" />
							<div className="aboutModalText">
								<p> 
									My name is John Farrell, I’m a Portland-based developer and designer. 
									Graduate of & former Research Fellow at ITP-NYU. 
									I have a resume over here, and am on github over there. 
									Available for freelance work related to full-stack web development, 
									data wrangling & analysis, interactive maps, and more. 
									johnefarrell18 at gmail dot com
								</p>
							</div>
						</div>
					</div>

				</Modal>
				)

		} else {

			return (
				<Modal
					isOpen={show}
					shouldCloseOnOverlayClick={true}
					contentLabel="Modal"
					onClick={handleClick}
					style= {{
						overlay: {
							background: 'rgba(252,215,0,0.55)'
						},
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
	}

const mapStateToProps = (state) => {
	return { 
		project: state.project,
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