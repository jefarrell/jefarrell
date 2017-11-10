import * as actions from '../src/actions/index'

describe(' <<< portfolio actions >>> ', () => {
	
	it('hideItem should create HIDE_MODAL action', () => {
		const expectedAction = {
			type: 'HIDE_MODAL'
		}
		expect(actions.hideItem()).toEqual(expectedAction)
	});

	it('showAbout should create SHOW_ABOUT action', () => {
		const expectedAction = {
			type: 'SHOW_ABOUT'
		}
		expect(actions.showAbout()).toEqual(expectedAction);
	})

	it('showItem should create SHOW_MODAL action', () => {
		const expectedAction = {
			type: 'SHOW_MODAL',
			body: undefined,
			foot: undefined,
			head: undefined,
			itemCode: undefined,
			photo_count: undefined,
			title: undefined,
			video_src: undefined,
			videos: undefined
		}
		expect(actions.showItem()).toEqual(expectedAction);
	})

});