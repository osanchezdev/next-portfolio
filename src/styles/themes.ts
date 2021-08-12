import { DefaultTheme } from "styled-components"

const darkTheme: DefaultTheme = {
  font: "Istok Web",
  maxWidth: 1366,
  colors: {
    text: "#EEE",
    error: "#DC3545",
    primary: "#FF7C1F",
    secondary: "#3A4750",
    bg1: "#162C4C",
    bg2: "#16234C",
  },
}

const lightTheme: DefaultTheme = {
  font: "Istok Web",
  maxWidth: 1366,
  colors: {
    text: "#313841",
    error: "#DC3545",
    primary: "#2A4494",
    secondary: "#3A4750",
    bg1: "#eee",
    bg2: "#fafafa",
  },
}

export { lightTheme, darkTheme }
