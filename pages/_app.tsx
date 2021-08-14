import "@fontsource/istok-web/400.css"
import "@fontsource/istok-web/700.css"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import AppProvider from "src/context/appContext"

const DynamicLoading = dynamic(
  () => import("../src/components/Loading/Loading.component")
)

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true)
    }
    const handleStop = () => {
      window &&
        window.setTimeout(() => {
          setLoading(false)
        }, 2000)
    }
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
  }, [])

  return (
    <AppProvider>
      <AnimatePresence>
        {loading ? (
          <DynamicLoading key="loading-page" />
        ) : (
          <Component key="component" {...pageProps} />
        )}
      </AnimatePresence>
    </AppProvider>
  )
}
export default MyApp
