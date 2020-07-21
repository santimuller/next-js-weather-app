import Head from 'next/head'
import '../styles.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>A Weather App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Pronóstico en tiempo real, Mira como van a estar el clima en los próximos 5 días de las ciudades más importantes."/>
        <link
          rel="stylesheet"
          href="cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App