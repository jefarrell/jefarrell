import React from 'react'
import { connect } from 'react-redux';
import { showAbout } from '../actions';

let Header = ({dispatch, modal}) => {


	const handleClick = (e) => {
		dispatch(showAbout());
	}

	return (
		<div className="headerContainer">
			<hr />
			<span className="headerName">
			  John Farrell
			</span>
			<span className="headerAbout" onClick= { handleClick }>
			  About
			</span>
		</div>
	)
}


const mapStateToProps = (state) => {
	return { 
		modal: state.modal 
	}
}


Header = connect()(Header);

export default Header;