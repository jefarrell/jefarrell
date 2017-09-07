const selection = (state, action) => {

	switch(action.type) {
		case 'PORTFOLIO_ITEM':
			return {
					id: action.id,
					project: action.text,
			}
		default: 
			return state
	}
}


export default selection;