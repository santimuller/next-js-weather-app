import { FC, ReactElement } from 'react'
import CitiesModule from 'modules/cities'
import Header from 'components/Header'

const Home:FC = ():ReactElement => {
  return(
    <>
      <Header />
      <CitiesModule />
    </>
  )
}

export default Home