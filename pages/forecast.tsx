import { FC, ReactElement } from 'react'
import ForecastOfCity from 'modules/forecast'
import Header from 'components/Header'

const Forecast:FC = ():ReactElement => {
  return(
    <>
      <Header backBtn={true}/> 
      <ForecastOfCity />
    </>
  )
}

export default Forecast