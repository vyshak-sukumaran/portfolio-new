import '../styles/globals.css'
import React from 'react'
import Spinner from '../components/loading/Spinner'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2100)
  }, [])
  return (
    <>
      {
        loading ?
          <Spinner />
          :
          <React.Fragment>
            <Component {...pageProps} />
          </React.Fragment>
      }
    </>
  )
}

export default MyApp
