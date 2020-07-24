import { FC, ReactElement, useEffect, useState } from  'react'
import CardWeather from 'components/CardWeather'
import { locationApi, getCityWeather } from 'helpers/rest'
import Loader from 'components/Loader'
import axios from 'axios'
import dynamic from 'next/dynamic'
//uso dynamic import simil lazy de react que no tiene soporte en el servidor dynamic lo usa next
const OtherCities = dynamic(() => import('./OtherCities'))
 

const CitiesModule:FC = ():ReactElement => {
  const headlineStyles = "px-4 mt-4 mb-3 font-bold text-xl text-gray-900 family-bold"
  const [locationData, setLocationData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () :Promise<any> => {
      try {
        setLoading(true)
        const { data } = await axios.get(locationApi);
        const responseWeather = await getCityWeather(data.lat, data.lon)
        setLocationData(data)
        setWeatherData(responseWeather.data)
      } catch(e){
        console.log(e)
        throw new Error(`Error en las peticiones ${e}`)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const propsActualLocation = { locationData, temp: weatherData?.current?.temp}

  return loading ? <Loader /> : (
    <section className="container m-auto p-4">
      <h1 className={headlineStyles}>Clima en mi ubicación actual</h1>
      <div className="px-4">
        <CardWeather {...propsActualLocation} />
      </div>

      <OtherCities />
    </section>
  )
}

export default CitiesModule