import {FC, ReactElement} from  'react'

const Cities:FC = ():ReactElement => {
  return (
    <div className="container">
      <h1>Clima en mi ubicación actual</h1>
      {/* <CardWeather /> */}

      <h2>Clima en las principales ciudades</h2>
    </div>
  )
}

export default Cities