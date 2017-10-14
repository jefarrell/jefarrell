export const showItem = (itemCode, title, head, body, foot, photo_count, videos, video_count, video_src ) => {
	return {
		type: 'SHOW_MODAL',
		itemCode, title, head, body, foot, photo_count, videos, video_count, video_src
	}
}

export const hideItem = () => {
	return {
		type: 'HIDE_MODAL'
	}
}

export const showAbout = () => {
	return {
		type: 'SHOW_ABOUT'
	}
}