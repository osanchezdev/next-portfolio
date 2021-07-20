import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: string;
    maxWidth: number;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      neutral_primary: string;
      neutral_secondary: string;
      text: string;
      link: string;
    };
  }
}
