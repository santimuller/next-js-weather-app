import { FC, ReactElement } from "react";

interface DayProps {
  weather: {},
  temp: {  min, max }
}
interface ForecastOfDayProps{
  data: DayProps
  currentDay: string
}

const ForecastOfDayItem:FC<ForecastOfDayProps> = ({ data, currentDay }):ReactElement => {
  const { weather, temp } = data

  return (
    <div className="flex justify-between p-4 text-indigo-700 items-center">
      <p className="family-bold font-bold  w-20 pr-2">{currentDay}</p>
      {/* Harcodeo el  0 porque la api puede encontrar varios climas de distintos pronósticos para una misma ubicación */}
      <div className="family-bold font-bold">
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description}/>
      </div>
      <div className="family-bold font-bold">{temp.max}° - {temp.min}°</div>
    </div>
  )
}

export default ForecastOfDayItem