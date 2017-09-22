import React from 'react'

const Header = ({onClick}) => {

	return (
		<div className="header">
			<hr />
			<span className="header_name">
			  John Farrell
			</span>
			<span 
				className="header_about" 
				onClick = { e => {
					e.preventDefault()
					onClick()
				}
			}>
			  About
			</span>
		</div>
	)
}

export default Header;