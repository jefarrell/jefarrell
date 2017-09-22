import React from 'react'
import { connect } from 'react-redux';
import { showAbout } from '../actions';
import Header from '../components/Header';


const mapStateToProps = state => {
	return { 
		modal: state.modal 
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: () => {
			dispatch(showAbout())
		}
	}
}

const HeaderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)

export default HeaderContainer;
