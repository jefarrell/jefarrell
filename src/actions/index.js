export const showItem = (itemCode, status) => {
	return {
		type: 'SHOW_MODAL',
		itemCode, status
	}
}