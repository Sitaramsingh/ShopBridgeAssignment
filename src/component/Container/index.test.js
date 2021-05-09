import React from 'react';
import { shallow } from 'enzyme';
import Container from './index';


describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Container/>);
    expect(component).toMatchSnapshot();
  });
});