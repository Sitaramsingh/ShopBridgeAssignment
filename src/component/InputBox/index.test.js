import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './index';


describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<InputBox/>);
    expect(component).toMatchSnapshot();
  });
});