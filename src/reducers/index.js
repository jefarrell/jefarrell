const selection = (state=[], action) => {

	switch(action.type) {
		case 'PORTFOLIO_ITEM':
			return [
				...state,
				{
					id: action.id,
					project: action.name,
				}
			]
		default: 
			return state
	}
}


export default selection;