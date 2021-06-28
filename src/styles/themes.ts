import { DefaultTheme } from "styled-components";

// TODO: re check theme colors, add sidebarColor?, particles?, particlesLink?
const darkTheme: DefaultTheme = {
  font: "Istok Web",
  colors: {
    primary: "#f49d37",
    secondary: "#e40066",
    tertiary: "#78c0e0",
    neutral_primary: "#2D3142",
    neutral_secondary: "#4f5d75",
    text: "#fff",
    link: "#78c0e0",
  },
};

const lightTheme: DefaultTheme = {
  font: "Istok Web",
  colors: {
    primary: "#f49d37",
    secondary: "#e40066",
    tertiary: "#78c0e0",
    neutral_primary: "#fafafa",
    neutral_secondary: "#4f5d75",
    text: "#2D3142",
    link: "#78c0e0",
  },
};

export { lightTheme, darkTheme };
