import React from 'react';
import { shallow } from 'enzyme';
import * as ReactRedux from 'react-redux'
import App from './App';


describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });
    it('should work', () => {
      const mockXXXFn = jest.fn()
      const spyOnUseDispatch = jest
        .spyOn(ReactRedux, 'useDispatch')
        .mockReturnValue({ xxxFn: mockXXXFn })
      spyOnUseDispatch.mockRestore()
    })
});
