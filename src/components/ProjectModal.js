import React from 'react'
import Modal from 'react-modal';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


const ProjectModal = ({modal, project, title, head, body, foot, images, onClick}) => {

	if (project === 'About') {
		return (
			<Modal
				isOpen={modal}
				shouldCloseOnOverlayClick={true}
				contentLabel="Modal"
				onClick = { e => {
					e.preventDefault()
					onClick()
					}
				}
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
						<Button 
							className="modalClose" 
							onClick = { e => {
								e.preventDefault()
								onClick()
							}
						}
						>X</Button>
					</div>
					<div className="aboutModalInfo">
						<img src={images} className="aboutImage" />
						<div className="aboutModalText">
							<p> 
								My name is John Farrell, I’m a Portland-based developer and designer. 
								Graduate of & former Research Fellow at ITP-NYU. 
								I have a resume over here, and am on github over there. 
								Available for freelance work related to full-stack web development, 
								data wrangling & analysis, interactive maps, and more. 
								<span id="aboutModalEmail">johnefarrell18 at gmail dot com</span>
							</p>
						</div>
					</div>
				</div>

			</Modal>
			)

	} else {

		return (
			<Modal
				isOpen={modal}
				shouldCloseOnOverlayClick={true}
				contentLabel="Modal"
				onClick = { e => {
					e.preventDefault()
					onClick()
					}
				}
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
						<Button 
							className="modalClose" 
							onClick = { e => {
								e.preventDefault()
								onClick()
								}
							}
						>X</Button>
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

export default ProjectModal;

