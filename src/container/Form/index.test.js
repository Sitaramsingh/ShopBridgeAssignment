import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Form/>);
    expect(component).toMatchSnapshot();
  });
});