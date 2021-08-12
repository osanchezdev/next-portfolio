import { useContext } from "react"
import Head from "next/head"

import NotFoundPage from "../src/components/NotFound/NotFound.component"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../src/styles/themes"
import { GlobalStyles } from "../src/styles/global"
import { AppContext } from "../src/context/appContext"

export default function NotFound() {
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
          content="Oscar Sánchez personal portfolio. Software developer."
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
          content="Oscar Sánchez personal portfolio. Software developer."
        />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="osanchez.me" />
        <meta property="og:url" content="https://www.osanchez.me" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <NotFoundPage />
    </ThemeProvider>
  )
}
