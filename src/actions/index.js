export const showItem = (project, title, head, body, foot, photo_count, videos, video_src ) => {
	return {
		type: 'SHOW_MODAL',
		project, title, head, body, foot, photo_count, videos, video_src
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