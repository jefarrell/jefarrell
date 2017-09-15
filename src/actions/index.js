export const showItem = (itemCode,title, head, body, foot, photos) => {
	return {
		type: 'SHOW_MODAL',
		itemCode, title, head, body, foot, photos
	}
}

export const hideItem = () => {
	return {
		type: 'HIDE_MODAL'
	}
}