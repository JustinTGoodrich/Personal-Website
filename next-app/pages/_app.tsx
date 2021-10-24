// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Theme = {
  black: "rgb(25,23,22)",
  white: "rgb(242,239,233)"
}

const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
     background: rgb(242,239,233);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: 'VT323', monospace;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
export default MyApp
