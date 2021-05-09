import React from 'react';
import { shallow } from 'enzyme';
import Table from './index';


describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Table/>);
    expect(component).toMatchSnapshot();
  });
});