import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';


describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Button/>);
    expect(component).toMatchSnapshot();
  });
});