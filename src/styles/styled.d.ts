import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    font: string
    maxWidth: number
    colors: {
      text: string
      error: string
      primary: string
      secondary: string
      bg1: string
      bg2: string
    }
  }
}
