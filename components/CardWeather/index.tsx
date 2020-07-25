import { FC, ReactElement } from 'react'
import Router from 'next/router'

interface LocationDataProps{
  city: string,
  regionName: string,
  country: string,
  lon: string,
  lat: string,
  class?: string,
}

interface CardWeatherProps {
  locationData: LocationDataProps,
  temp: number,
}


const CardWeather :FC<CardWeatherProps> = ({locationData, temp}) :ReactElement => {
  const bgImage = locationData.class ? `bg-${locationData.class}` : 'bg-default'
  const styles = `card cursor-pointer text-shadow p-4 mb-4 flex h-32 text-white md:h-64 justify-between items-end ${bgImage}`
  
  const handleClick = () => {
    Router.push(
      `/forecast?lat=${locationData.lat}&lon=${locationData.lon}&region=${locationData.regionName}, ${locationData.country}`,
      `/clima/?lat=${locationData.lat}&lon=${locationData.lon}&region=${locationData.regionName}, ${locationData.country}`,
    )
  }

  return(
    <div className={styles} onClick={handleClick} data-testid={bgImage}>
      <div>
        <h2 className="text-xl family-bold">{locationData?.city}</h2>
        <p>{`${locationData?.regionName}, ${locationData?.country}`}</p>
      </div>
      <div className="text-3xl xl:text-4xl">{temp}°</div>
    </div>
  )
}

export default CardWeather