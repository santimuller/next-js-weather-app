import React from 'react';
import renderer from 'react-test-renderer';
import ForecastOfDayItem from './ForecastOfDay';

const mockWeatherData = {
  weather: [{
    icon: 'sarasa',
    description: 'icon',
  }],
  temp: { min: 10, max: 20 }
}

it('ForecastOfDayItem renders without changes', () => {
  const tree = renderer.create(
    <ForecastOfDayItem data={mockWeatherData} currentDay="Lunes" />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});