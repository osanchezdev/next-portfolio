import "tippy.js/dist/tippy.css"

import { useContext } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"

import HomePage from "../src/components/Home/Home.component"
import Layout from "../src/components/shared/layout/Layout.component"
import FullScreenSlider from "../src/components/shared/FullScreenSlider/FullScreenSlider.component"

import { ThemeProvider } from "styled-components"

import { lightTheme, darkTheme } from "../src/styles/themes"
import { GlobalStyles } from "../src/styles/global"
import { AnimatePresence } from "framer-motion"
import { AppContext } from "../src/context/appContext"
import LoadingPage from "../src/components/Loading/Loading.component"

const DynamicComponentWithCustomLoading = dynamic(
  () => import("../src/components/Home/Home.component"),
  { loading: () => <LoadingPage /> }
)

export default function Home() {
  const { isLightTheme } = useContext(AppContext)

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head>
        <title>Oscar Sánchez | Software developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Personal Oscar Sánchez portfolio. Software developer."
        />
        <meta
          name="keywords"
          content="developer, frontend developer, backend developer, mobile developer, software developer, fullstack developer"
        />
        <meta httpEquiv="expires" content="43200" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Personal Oscar Sánchez portfolio. Software developer."
        />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="osanchez.me" />
        <meta property="og:url" content="https://www.osanchez.me" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <Layout>
        <DynamicComponentWithCustomLoading />
      </Layout>
      <AnimatePresence key="fullscreen-wrapper">
        <FullScreenSlider />
      </AnimatePresence>
    </ThemeProvider>
  )
}
