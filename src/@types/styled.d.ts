import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    fourColor: string;
    backgroundCard: string;
    backgroundPage: string;
    hover: string;
    boxShadowHover: string;
    colorText: string;
    accentGradient: string;
  }
}
