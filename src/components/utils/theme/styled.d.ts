/* eslint-disable no-unused-vars */
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface CustomThemeOptions extends ThemeOptions {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
        fuschsia: string;
        anil: string;
        lime: string;
        amber: string;
        purple: string;
      };
      info: {
        main: string;
        light: string;
      };
      success: {
        main: string;
        light: string;
      };
      error: {
        main: string;
        light: string;
      };
      warning: {
        main: string;
        light: string;
      };
      grey: {
        100: string;
        300: string;
        500: string;
        800: string;
        900: string;
      };
      background: {
        dark: {
          fuchsia: string;
          purple: string;
          anil: string;
          dark80: string;
          dark90: string;
          marine: string;
        };
        light: {
          grey: {
            10: string;
            30: string;
            50: string;
          };
          light: string;
          lime: string;
          turquoise: string;
          amber: string;
        };
      };
    };
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      circle: string;
      full: string;
    };
    fontFamily: {
      brand: string[] | string;
      neutral: string[] | string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
      xxs: string;
      xxxs: string;
      display: {
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
    fontWeight: {
      bold: number;
      regular: number;
    };
    lineHeight: {
      display: string;
      heading: string;
      longText: string;
      shortText: string;
    };
    opacity: {
      semiTransparent: string;
      medium: string;
      intense: string;
      semiOpaque: string;
    };
    shadow: {
      light: string;
      normal: string;
      extreme: string;
    };
    space: {
      inline: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
        xxs: string;
        xxxs: string;
      };
      inset: {
        lg: string;
        md: string;
        sm: string;
        xs: string;
        xxs: string;
        xxxs: string;
      };
      squish: {
        lg: string;
        md: string;
        sm: string;
        cs: string;
      };
      stack: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
        xxs: string;
        xxxs: string;
      };
    };
    textDecoration: {
      none: string;
      allCaps: string;
      underline: string;
    };
    typography: {
      fontFamily: string;
      fontWeightBold: number;
      fontWeightRegular: number;
    };
  }
  export function createTheme(options?: CustomThemeOptions): Theme;
}
