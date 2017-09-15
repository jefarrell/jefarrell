const selection = (state = {modal: false}, action) => {

	switch(action.type) {
		case 'SHOW_MODAL':
			return {
				modal: true,
				project: action.itemCode,
				title: action.title,
				head: action.head,
				body: action.body,
				foot: action.foot,
				photos: action.photos
			}
		case 'HIDE_MODAL':
			return {
				modal: false,
				project: null
			}
		default: 
			return state
	}
}


export default selection;