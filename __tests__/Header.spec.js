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

describe('<<< components >>>', () => {
	describe('<<< Header >>>', () => {

		it('renders the dumb component', () => {
			const { enzymeWrapper } = setup()
			expect(enzymeWrapper.length).toEqual(1)
		})

		it('should call onClick', () => {
			const props = {
				onClick: jest.fn()
			}
			// const { enzymeWrapper, props } = setup()
			// const output = enzymeWrapper.find('span[className="header_about"]')
			const output = shallow(<Header {...props} />)
			output.find('span[className="header_about"]').simulate('click', { preventDefault() {} });
			//output.simulate('click')
			expect(props.onClick).toHaveBeenCalledWith('clicked')
			//expect(enzymeWrapper.find('span[className="header_about"]').prop('onClick')).toEqual(props.onClick)
		});
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