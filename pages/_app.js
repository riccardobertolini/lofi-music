import '@/styles/globals.css'
import Head from 'next/head'

import AccessibilityContextProvider from '../contexts/AccessibilityContext'

export default function App({ Component, pageProps }) {
  return (
    <AccessibilityContextProvider>
      <Head>
        <title>Lofi-Music 🎵</title>
      </Head>
      <Component {...pageProps} />
    </AccessibilityContextProvider>
  )
}
