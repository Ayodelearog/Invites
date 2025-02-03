export const theme = {
    colors: {
      brand: {
        primary: '#193E87',
        secondary: '#5D7DAF',
      },
      state: {
        info: '#2E6CDE',
        success: '#2E6CDE',
        warning: '#E2B93B',
        error: '#FF2D55',
      },
      black: {
        1: '#000000',
        2: '#1D1D1D',
        3: '#282828',
      },
      gray: {
        1: '#333333',
        2: '#4F4F4F',
        3: '#828282',
        4: '#BDBDBD',
        5: '#E0E0E0',
      },
      white: '#FFFFFF',
    },
    spacing: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32,
      xl: 40,
      xxl: 56,
      '3xl': 72,
      '4xl': 80,
      '5xl': 96,
      '6xl': 120,
    },
    typography: {
      heading: {
        h1: { size: 56, lineHeight: 61.6 },
        h2: { size: 48, lineHeight: 52.8 },
        h3: { size: 40, lineHeight: 44 },
        h4: { size: 32, lineHeight: 35.2 },
        h5: { size: 24, lineHeight: 26.4 },
        h6: { size: 20, lineHeight: 22 },
      },
      body: {
        large: { size: 20, lineHeight: 28 },
        medium: { size: 18, lineHeight: 25.2 },
        normal: { size: 16, lineHeight: 22.4 },
        small: { size: 14, lineHeight: 19.6 },
      },
    },
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      full: 9999,
    },
    fonts: {
      regular: "BR Firma",
      medium: "BR Firma Medium",
      bold: "BR Firma Bold",
      light: "SF-UI Light",
    },
  };
  
  export type Theme = typeof theme;