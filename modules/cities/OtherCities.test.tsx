import React from 'react';
import renderer from 'react-test-renderer';
import OtherCities from './OtherCities';

it('ForecastOfDayItem renders without changes', () => {
  const tree = renderer.create(
    <OtherCities />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});