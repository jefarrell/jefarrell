import React from 'react'
import Modal from 'react-modal';
import SimpleSlider from './Carousel'
import PropTypes from 'prop-types';
const imgs = require.context('../assets/images', true);

const ProjectModal = ({modal, project, title, head, body, foot, photo_count, videos, video_count, video_src, onClick}) => {

	if (project === 'About') {
		return (
			
			<Modal
				isOpen={ modal }
				shouldCloseOnOverlayClick={true}
				contentLabel="Modal"
				closeTimeoutMS={1000}
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
				<div className="modal_about_container">
					<div className="modal_nav">
						<button 
							className="modal_close" 
							onClick = { e => {
								e.preventDefault()
								onClick()
							}
						}>
							X
						</button>
					</div>
					<div className="modal_about_info">
						<img 
							src={ imgs('./about/about.jpg') } 
							className="modal_about_image" 
						/>
						<div className="modal_about_text">
							<p> 
								My name is John Farrell, I’m a Portland-based developer and designer. 
								Graduate of & former Research Fellow at <a href="http://tisch.nyu.edu/itp" target="blank">ITP-NYU</a>. 
								I have a <a href="https://drive.google.com/file/d/1Uh5U2i9pMn2Wnd5_WZSIDV6cYLQzm5GQ/view?usp=sharing" target="blank">resume</a> over here, and am on <a href="https://github.com/jefarrell">github</a> over there. 
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
				closeTimeoutMS={1000}
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
				<div className="modal_container">
					<div className="modal_nav">
						<button 
							className="modal_close" 
							onClick = { e => {
								e.preventDefault()
								onClick()
								}
						}>
							X
						</button>
					</div>
					<div className="modal_image_container">
						<SimpleSlider 
							project={ project } 
							photo_count={ photo_count }
							videos={ videos }
							video_src={ video_src } 
						/>
					</div>
					<div className="modal_info_container">
						<h1 className="modal_title"> { title } </h1>
						<span className="modal_info_head" dangerouslySetInnerHTML={{__html: head }} />
						<p className="modal_info_body" dangerouslySetInnerHTML={{__html: body }} />
						<span className="modal_info_foot" dangerouslySetInnerHTML={{__html: foot }} />
					</div>
				</div>
			</Modal>
		)

	} 
}


ProjectModal.propTypes = {
	modal: PropTypes.bool,
	project: PropTypes.string,
	title: PropTypes.string,
	head: PropTypes.string,
	body: PropTypes.string,
	foot: PropTypes.string,
	photo_count: PropTypes.number,
	videos: PropTypes.bool,
	video_count: PropTypes.number,
	video_src: PropTypes.array,
	onClick: PropTypes.func
}

export default ProjectModal;

