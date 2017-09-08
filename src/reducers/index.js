const selection = (state, action) => {

	switch(action.type) {
		case 'PORTFOLIO_ITEM':
			return {
					project: action.text
			}
		default: 
			return state
	}
}


export default selection;