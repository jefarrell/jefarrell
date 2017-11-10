import selection from '../src/reducers/index'

describe(' <<< portfolio reducers >>> ', () => {

	it('should return initial state', () => {
		expect(selection(undefined, {})).toEqual(
		{
			modal: false
		})
	})

	it('should hide the modal', () => {
		expect(selection([], {
			type: 'HIDE_MODAL'
		})
		).toEqual({
			modal: false,
			project: null
		})
	})
})