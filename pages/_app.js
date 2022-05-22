import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../lib/gtag'
import Analytics from '../components/Analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default MyApp
