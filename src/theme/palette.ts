import colors from "./colors";

const natural = {
  common: colors.common,
  grey: colors.greyscale,
  gradients: colors.gradients
}

const palette: { light: any, dark: any } = {
  light: {
    ...natural,
    primary: {
      light: colors.darkCyan[50],
      main: colors.darkCyan[500],
      dark: colors.darkCyan[800],
    },
    secondary: {
      light: colors.blue[50],
      main: colors.blue[500],
      dark: colors.blue[800],
    },
    success: {
      light: colors.green[400],
      main: colors.green[500],
      background: '#E7F8F3',
    },
    error: {
      light: colors.red[400],
      main: colors.red[500],
      background: '#FCEAEE',
    },
    warning: {
      light: colors.yellow[400],
      main: colors.yellow[500],
      background: '#FEF7EB',
    },
    disabled: {
      main: colors.greyscale[400],
    },
    background: {
      body: colors.greyscale[300],
      section: colors.common.light,
    },
    text: {
      primary: colors.greyscale[500],
      secondary: colors.greyscale[600],
      inactive: colors.greyscale[400],
      disabled: colors.greyscale[400],
    },
    link: {
      normal: colors.blue[500],
      visited: colors.blue[600],
    },
    icon: {
      active: colors.greyscale[500],
      inactive: colors.greyscale[400],
    },
    action: {
      active: colors.greyscale[500],
      inactive: colors.greyscale[400],
    },
    divider: {
      active: colors.blue[500],
      external: colors.greyscale[300],
      internal: colors.greyscale[300],
    },
    input: {
      active: colors.greyscale[500],
      placeholder: colors.greyscale[400],
    },
  },
  dark: {
    ...natural,
    primary: {
      light: colors.darkCyan[50],
      main: colors.darkCyan[500],
      dark: colors.darkCyan[800],
    },
    secondary: {
      light: colors.blue[50],
      main: colors.blue[500],
      dark: colors.blue[800],
    },
    success: {
      light: colors.green[400],
      main: colors.green[500],
      background: '#E7F8F3',
    },
    error: {
      light: colors.red[400],
      main: colors.red[500],
      background: '#FCEAEE',
    },
    warning: {
      light: colors.yellow[400],
      main: colors.yellow[500],
      background: '#FEF7EB',
    },
  }
}

export default palette;

