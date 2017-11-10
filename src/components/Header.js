import React from 'react'
import PropTypes from 'prop-types'

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

Header.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default Header;