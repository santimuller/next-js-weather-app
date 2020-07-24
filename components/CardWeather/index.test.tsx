import React from 'react';
import renderer from 'react-test-renderer';
import CardWeather from './index';

const mockLocationData = {
  city: 'Caseros',
  regionName: 'Buenos Aires',
  country: 'Argentina',
  lon: '11.20',
  lat: '34.00',
}

it('CardWeather renders without changes', () => {
  const tree = renderer.create(
    <CardWeather locationData={mockLocationData} temp={20} />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});