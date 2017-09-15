export const showItem = (itemCode, status) => {
	return {
		type: 'SHOW_MODAL',
		itemCode, status
	}
}

export const hideItem = () => {
	return {
		type: 'HIDE_MODAL'
	}
}