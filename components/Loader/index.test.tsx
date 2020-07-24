import React from 'react';
import Loader from './index';
import renderer from 'react-test-renderer';

it('Loader renders without changes', () => {
  const tree = renderer.create(
    <Loader />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});