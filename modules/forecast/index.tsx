import { FC, ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCityWeather } from 'helpers/rest'
import Loader from 'components/Loader'
import ForecastOfDayItem from './ForecastOfDay'
import { getFilterFiveDays } from 'helpers/functions'
import { daysOfWeek } from 'helpers/days'
import { addDaysAndGetDay, setBackground } from 'helpers/functions'

const ForecastOfCity: FC = ():ReactElement => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [weatherData, setWeatherData] = useState(null)
  const {lat, lon, region} = router?.query

  useEffect(() => {
    const fetchData = async () :Promise<any> => {
      try {
        setLoading(true)
        const response = lat && lon && await getCityWeather(lat, lon)
        lat && lon && setWeatherData(response.data)
      } catch(e){
        console.log(e)
        throw new Error(`Fallo onecallapi: ${e}`)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [lat, lon])

  const forecastFiveDays = weatherData?.daily && getFilterFiveDays(weatherData.daily)


  return loading ? <Loader /> : (
    <section>
      <h1 className="sr-only">Prónostico de hoy y los próximos 5 días en {region}</h1>

      <div className={`h-64 py-16 md:py-40 p-6 flex flex-col items-center justify-center ${setBackground(weatherData?.current?.weather[0].main)}`}>
        <div className="text-white family-bold text-lg text-shadow">{region}</div>
        <div className="text-white text-4xl text-shadow flex">
          {weatherData?.current?.temp}° 
          {weatherData && <img src={`http://openweathermap.org/img/wn/${weatherData?.current?.weather[0].icon}.png`} alt="Icono de clima"/>}
          </div>
      </div>

      <div className="card w-4/5 md:w-3/5 xl:w-2/4 mx-auto -mt-20 bg-white">
        <h2 className="text-gray-700">Pronóstico próximos días</h2>
        {/* El index +1 es porque al sustraer el primero en getFilterFiveDays que es el día de hoy le pido que cuente a partir de mañana */}
        {forecastFiveDays && forecastFiveDays.map((data, index) => <ForecastOfDayItem 
            data={data} 
            key={index}
            currentDay={daysOfWeek[addDaysAndGetDay(new Date(), index +1)]} 
          />
        )}
      </div>
    </section>
  )
}

export default ForecastOfCity