import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';


describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NotFound/>);
    expect(component).toMatchSnapshot();
  });
});