import { FC, ReactElement, useEffect, useState } from 'react'
import { arrayOfCities } from  './cities'
import CardWeather from 'components/CardWeather'
import { getCityWeather } from 'helpers/rest'
import Loader from 'components/Loader'

const OtherCities: FC = ():ReactElement => {
  const headlineStyles = "px-4 mt-4 mb-3 font-bold text-xl text-gray-900 family-bold"
  const [temps, setTemps] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await Promise.all(arrayOfCities.map(city => getCityWeather(city.lat, city.lon)))
        const temps = response.map(res => res.data.current.temp)
        setTemps(temps)
      } catch (e) {
        //acá mandaría al trackeador de errores correspondiente newrelic, bugsnag ...etc
        console.log('Falló al obtener los datos de las ciudades', e)
        throw new Error(`Error en las peticiones ${e}`)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return loading ? <Loader /> : (
    <>
      <h2 className={headlineStyles}>Clima en otras ciudades del mundo</h2>
       <div className="md:flex flex-wrap">
        {arrayOfCities.map((region, index) => <div key={index} className="md:w-1/3 px-4 py-2">
            <CardWeather 
              locationData={region} 
              temp={temps[index]} 
            /> 
          </div>
        )}
      </div>
    </>  
  )
}

export default OtherCities