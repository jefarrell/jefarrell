import React from 'react'
import Modal from 'react-modal';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import SimpleSlider from './Carousel'
const imgs = require.context('../assets/images', true);

const ProjectModal = ({modal, project, title, head, body, foot, photo_count, videos, video_count, video_src, onClick}) => {

	if (project === 'About') {
		return (
			
			<Modal
				isOpen={ modal }
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
				<div className="container-fluid modal_container">
					<div className="modal_nav">
						<Button 
							className="modal_close" 
							onClick = { e => {
								e.preventDefault()
								onClick()
							}
						}>
							X
						</Button>
					</div>
					<div className="modal_about_info">
						<img 
							src={ imgs('./about/about.jpg') } 
							className="modal_about_image" 
						/>
						<div className="modal_about_text">
							<p> 
								My name is John Farrell, I’m a Portland-based developer and designer. 
								Graduate of & former Research Fellow at <a href="http://tisch.nyu.edu/itp">ITP-NYU</a>. 
								I have a resume over here, and am on <a href="https://github.com/jefarrell">github</a> over there. 
								Available for freelance work related to full-stack web development, 
								data wrangling & analysis, interactive maps, and more. 
								<span id="modal_about_email"><span id="modal_about_email_id">johnefarrell18</span> at gmail dot com</span>
							</p>
						</div>
					</div>
				</div>

			</Modal>
			)

	} else {

		return (
			<Modal
				isOpen={ modal }
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
						borderRadius: 0,
					}
				}}
			> 
				<div className="container-fluid modal_container">
					<div className="modal_nav">
						<Button 
							className="modal_close" 
							onClick = { e => {
								e.preventDefault()
								onClick()
								}
						}>
							X
						</Button>
					</div>
					<Col lg={8} className="modal_image_container">
						<SimpleSlider 
							project={ project } 
							photo_count={ photo_count }
							videos={ videos }
							video_src={ video_src } 
						/>
					</Col>
					<Col lg={4} className="modal_info_container">
						<h1 className="modal_title"> { title } </h1>
						<span className="modal_info_head" dangerouslySetInnerHTML={{__html: head }} />
						<p className="modal_info_body" dangerouslySetInnerHTML={{__html: body }} />
						<span className="modal_info_foot" dangerouslySetInnerHTML={{__html: foot }} />
					</Col>
				</div>
			</Modal>
		)

	} 
}

export default ProjectModal;

