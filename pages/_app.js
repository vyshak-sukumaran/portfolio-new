import '../styles/globals.css'
import React from 'react'
import ErrorBoundary from '../utils/ErrorBoundary'

function MyApp({ Component, pageProps }) {

  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default MyApp
