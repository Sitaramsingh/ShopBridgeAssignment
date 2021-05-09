import React from 'react';
import { shallow } from 'enzyme';
import * as ReactRedux from 'react-redux'
import ProductDashboard from './index';


jest.mock("react-redux", () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn()
  }));

  describe('Component should be render ', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ProductDashboard/>);
    expect(component.debug()).toMatchSnapshot();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

    it('should work', () => {
      const mockXXXFn = jest.fn()
      const spyOnUseDispatch = jest
        .spyOn(ReactRedux, 'useDispatch')
        .mockReturnValue({ xxxFn: mockXXXFn })
      spyOnUseDispatch.mockRestore()
    })
});