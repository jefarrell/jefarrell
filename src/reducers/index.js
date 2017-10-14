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
				photo_count: action.photo_count, 
				videos: action.videos, 
				video_count: action.video_count, 
				video_src: action.video_src
			}
		case 'HIDE_MODAL':
			return {
				modal: false,
				project: null
			}
		case 'SHOW_ABOUT':
			return {
				modal: true,
				project: 'About'
			}
		default: 
			return state
	}
}


export default selection;