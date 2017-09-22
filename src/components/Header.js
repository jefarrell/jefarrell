import React from 'react'

const Header = ({onClick}) => {

	return (
		<div className="headerContainer">
			<hr />
			<span className="headerName">
			  John Farrell
			</span>
			<span 
				className="headerAbout" 
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