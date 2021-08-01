import { useEffect, useState } from "react"
import { useDebounce } from "react-use"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import "@fontsource/istok-web/400.css"
import "@fontsource/istok-web/700.css"

import AppProvider from "../src/context/appContext"
import ContactFormProvider from "../src/context/contactFormContext"
import FullScreenSliderProvider from "../src/context/fullScreenSliderContext"
import LoadingPage from "../src/components/Loading/Loading.component"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [finishLoad, setFinishLoad] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const [, cancelDebounce] = useDebounce(
    () => {
      finishLoad && setLoading(false)
    },
    1500,
    [finishLoad]
  )

  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true)
      setFinishLoad(false)
    }
    const handleStop = () => {
      setFinishLoad(true)
    }
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
    }
  }, [loading])

  return (
    <AppProvider>
      <ContactFormProvider>
        <FullScreenSliderProvider>
          <AnimatePresence>
            {loading ? (
              <LoadingPage key="loading-page" />
            ) : (
              <Component key="component" {...pageProps} />
            )}
          </AnimatePresence>
        </FullScreenSliderProvider>
      </ContactFormProvider>
    </AppProvider>
  )
}
export default MyApp
