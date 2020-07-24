import axios from 'axios'

const WEATHER_API_KEY = "f60a3fa29fa6e36b1e27fdcdc033d25d"

export const locationApi = "http://ip-api.com/json/?fields=countryCode,city,regionName,lat,lon,country"
export const restApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export const getCityWeather = (lat,lon) => {
  return restApi.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&lang=es&appid=${WEATHER_API_KEY}`)
}

// export const getOtherCitiesWeather = (city, countryCode) => {
//   return restApi.get(`/weather?q=${city},${countryCode}&units=metric&lang=es&appid=${WEATHER_API_KEY}`)
// }