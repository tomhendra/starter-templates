import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from './LoadingPage';

test('Should correctly render Loading page', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
})