import selection from '../src/reducers/index'

describe(' <<< portfolio reducers >>> ', () => {

	it('should return initial state', () => {
		expect(selection(undefined, {})).toEqual(
		{
			modal: false
		})
	})

	it('should hide the Modal', () => {
		expect(selection([], {
			type: 'HIDE_MODAL'
		})
		).toEqual({
			modal: false,
			project: null
		})
	})

	it('should show the About Modal', () => {
		expect(selection([], {
			type: 'SHOW_ABOUT'
		})
		).toEqual({
			modal: true,
			project: 'About'
		})
	})

	it('should show the Project Modal', () => {
		expect(selection([], {
			type: 'SHOW_MODAL',
			project: 'Modal_test',
			modal: true,
			title: 'Modal test title',
			head: 'Modal test head',
			body: 'Modal test body',
			foot: 'Modal test foot',
			photo_count: 0,
			videos: false,
			video_src: []
		})
		).toEqual({
			modal: true,
			project: 'Modal_test',
			title: 'Modal test title',
			head: 'Modal test head',
			body: 'Modal test body',
			foot: 'Modal test foot',
			photo_count: 0,
			videos: false,
			video_src: []
		})
	})
})