import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Header from '../src/components/Header'


function setup() {
	const props = {
		onClick: jest.fn()
	}

	const enzymeWrapper = mount(<Header { ...props } />)

	return {
		props,
		enzymeWrapper
	}
}

describe('components', () => {
	describe('Header', () => {
		it('should render itself and subcomponents', () => {
			const { enzymeWrapper } = setup()

			expect(enzymeWrapper.find('div').hasClass('header')).toBe(true)
			//expect(enzymeWrapper).find('span').hasClass('header_name')).toBe(true)
		})
	})
})


// describe(' ~~ HEADER snapshot ~~ ', () => {
// 	it('capturing snapshot of Header', () => {
// 		const renderedValue = renderer.create(<Header />).toJSON()
// 		expect(renderedValue).toMatchSnapshot();
// 	});
// });

// describe(' HEADER component >> ', () => {
// 	let wrapper;

// 	beforeEach(() => {
// 		wrapper = shallow(<Header onClick)
// 	})
// });