import { setBackground, addDaysAndGetDay, getFilterFiveDays } from './functions'

describe('setBackground function', () => {
  it('returns the correct background for weather', () => {
    expect(setBackground('Clouds')).toBe('bg-clouds');
    expect(setBackground('Rain')).toBe('bg-rain');
    expect(setBackground('Clear')).toBe('bg-sunny');
  });
  it('is not exist the weather returns default background', () => {
    expect(setBackground('Ice')).toBe('bg-default');
  });
})

const date = new Date('2020-07-23 00:00:00') //thursday day returns 4
describe('addDaysAndGetDay function', () => {
  it('returns the correct background for weather', () => {
    expect(addDaysAndGetDay(date, 1)).not.toBe(4);
    expect(addDaysAndGetDay(date, 1)).toBe(5);
    expect(addDaysAndGetDay(date, 2)).toBe(6);
  });
})


const arrayDailyMock = [
  {test: 'test'},
  {test: 'test'},
  {test: 'test'},
  {test: 'test'},
  {test: 'test'},
  {test: 'test'},
  {test: 'test'},
  {test: 'test'},
]
describe('getFilterFiveDays function', () => {
  it('returns the length of five', () => {
    expect(getFilterFiveDays(arrayDailyMock)).toHaveLength(5);
  });
})
