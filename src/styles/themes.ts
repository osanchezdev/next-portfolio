import { DefaultTheme } from "styled-components"

// TODO (late): re check theme colors, add sidebarColor?, particles?, particlesLink?, shadow?
const darkTheme: DefaultTheme = {
  font: "Istok Web",
  maxWidth: 1366,
  colors: {
    primary: "#e40066",
    secondary: "#FF8000",
    // secondary: "#E09D60",
    // tertiary: "#2FF3E0",
    neutral_primary: "#1F3960",
    // primary: "#f49d37",
    tertiary: "#78c0e0",
    // neutral_primary: "#2D3142",
    neutral_secondary: "#2D3142",
    text: "#fff",
    link: "#78c0e0",
  },
}

const lightTheme: DefaultTheme = {
  font: "Istok Web",
  maxWidth: 1366,
  colors: {
    primary: "#e40066",
    secondary: "#FF8000",
    tertiary: "#78c0e0",
    neutral_primary: "#fafafa",
    neutral_secondary: "#2D3142",
    text: "#2D3142",
    link: "#78c0e0",
  },
}

export { lightTheme, darkTheme }
