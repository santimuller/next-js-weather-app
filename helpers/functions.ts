//Saco el día de hoy y el día 6 y 7, 
//es una manera sucia de hacerlo, lo ideal es que la api me mande los 5 días o  muestro directo los 7
//está forzado desde el front para  respetar la pauta, se evita mutar el array original con el splice
// por eso uso el filter 
export const getFilterFiveDays = (array) => {
  const newArray = array.filter((day, index) => index > 0 && index <= 5)
  return newArray
}

export const addDaysAndGetDay = (date:Date, days:number) => {
  const dateCopy = new Date(Number(date))
  dateCopy.setDate(date.getDate() + days)
  return dateCopy.getDay()
}

export const setBackground = (weather) => {
  const cases = {
    Clouds: 'clouds',
    Clear: 'sunny',
    Rain: 'rain',
    Snow: 'rain',
  }
  return cases[weather] ? `bg-${cases[weather]}` : 'bg-default' 
}