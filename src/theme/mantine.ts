import { createTheme, rem } from '@mantine/core';

// Your theme configuration is merged with default theme
const theme = createTheme({
  focusRing: 'never',
  defaultRadius: 'md',
  white: '#FFFFFF',
  black: '#1C232E',
  colors: {
    cyan: [
      '#e6f5f6',
      '#b1e0e3',
      '#8cd1d5',
      '#57bdc2',
      '#36b0b6',
      '#049ca4',
      '#048e95',
      '#036f74',
      '#02565a',
      '#024245'
    ],
    blue: [
      '#EAF5FB',
      '#BFE1F3',
      '#A0D2ED',
      '#75BEE4',
      '#5AB1DF',
      '#319ED7',
      '#2D90C4',
      '#237099',
      '#1B5776',
      '#15425A',
    ]
  },
});

export default theme;