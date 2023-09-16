const defaultTheme = {
  palette: {
    primary: {
      main: '#D4B3FF',
    },
    secondary: {
      main: '#681DB4',
      fuschsia: '#c11f57',
      anil: '#681DB4',
      lime: '#d6de26',
      amber: '#ffcc00',
      purple: '#bd10e0',
      default: '#292929',
    },
    info: {
      main: '#34d1e3',
      light: '#BDF7FF',
      dark: '#C89EFF',
    },
    success: {
      main: '#b8e986',
      light: '#BFF8E8',
    },
    error: {
      main: '#CC2F00',
      light: '#FFE3E0',
    },
    warning: {
      main: '#ffcc00',
      light: '#fff5cc',
    },
    grey: {
      100: '#f7f7fc',
      300: '#F5F5F5',
      500: '#CCCCCC',
      800: '#A3A3A3',
      900: '#666666',
    },
    background: {
      dark: {
        fuchsia: '#c11f57',
        purple: '#bd10e0',
        anil: '#681DB4',
        dark80: '#A3A3A3',
        dark90: '#110e49',
        marine: '#47147B',
      },
      light: {
        grey: {
          10: '#f7f7fc',
          30: '#e2e1eb',
          50: '#aeabc4',
        },
        light: '#ffffff',
        lime: '#d6de26',
        turquoise: '#34D1E3',
        amber: '#ffcc00',
        default: '#681DB4',
      },
    },
  },
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    circle: '50%',
    full: '9999px',
  },
  fontFamily: {
    brand: 'Galano Grotesque Alt',
    neutral: ['Open Sans', 'ui-sans-serif', 'sans-serif'],
  },
  fontSize: {
    xxl: '3rem',
    xl: '2.5rem',
    lg: '2rem',
    md: '1.5rem',
    sm: '1.25rem',
    xs: '1rem',
    xxs: '0.875rem',
    xxxs: '0.75rem',
    display: {
      lg: '8rem',
      md: '6rem',
      sm: '5rem',
      xs: '4rem',
    },
  },
  fontWeight: {
    bold: 900,
    regular: 500,
  },
  lineHeight: {
    display: '1.1em',
    heading: '1.3em',
    longText: '1.5em',
    shortText: '1.3em',
  },
  opacity: {
    semiTransparent: '.16',
    medium: '.4',
    intense: '.64',
    semiOpaque: '.8',
  },
  shadow: {
    light:
      '0 2px 6px 2px rgba( 0, 0, 0, .12 ), 0 0 1px 1px rgba( 0, 0, 0, .12 )',
    normal:
      '0 4px 12px 4px rgba( 0, 0, 0, .12 ), 0 0 1px 1px rgba( 0, 0, 0, .12 )',
    extreme:
      '0 8px 24px 8px rgba( 0, 0, 0, .12 ), 0 0 1px 1px rgba( 0, 0, 0, .12 )',
  },
  space: {
    inline: {
      xl: '8rem',
      lg: '4rem',
      md: '2rem',
      sm: '1rem',
      xs: '.5rem',
      xxs: '.25rem',
      xxxs: '.125rem',
    },
    inset: {
      lg: '2rem',
      md: '1.5rem',
      sm: '1rem',
      xs: '.5rem',
      xxs: '.25rem',
      xxxs: '.125rem',
    },
    squish: {
      lg: '2rem 3rem',
      md: '1.5rem 2rem',
      sm: '1rem 1.5rem',
      cs: '.5rem 1rem',
    },
    stack: {
      xl: '8rem',
      lg: '4rem',
      md: '2rem',
      sm: '1rem',
      xs: '.5rem',
      xxs: '.25rem',
      xxxs: '.125rem',
    },
  },
  textDecoration: {
    none: 'none',
    allCaps: 'uppercase',
    underline: 'underline',
  },
  typography: {
    fontFamily: 'Galano Grotesque Alt, Open Sans, sans-serif',
    fontWeightBold: 900,
    fontWeightRegular: 500,
  },
};

export default defaultTheme;
