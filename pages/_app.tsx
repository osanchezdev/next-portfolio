import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from '../src/styles/global'

import {lightTheme, darkTheme} from '../src/styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
}
export default MyApp
