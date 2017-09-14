const selection = (state = {modal:false}, action) => {

	switch(action.type) {
		case 'SHOW_MODAL':
			return {
				project: action.itemCode,
				status: action.status,
				modal: true
			}
		case 'HIDE_MODAL':
			return {
				project: null,
				modal: false
			}
		default: 
			return state
	}
}


export default selection;