import { create } from 'jss';
import preset from 'jss-preset-default';
import mainPalette from './palette';
import resetCss from './reset';
import typography from './typography';

export const theme = ({ name = 'light', direction = 'ltr'} = {}) => {
  const palette = name === 'light' || name === 'dark' ? mainPalette[name] : {};
  const spacing = 8;
  const breakpoints = {
    width: {
      xxxs: 320,
      xxs: 360,
      xs: 375,
      s: 414,
      m: 768,
      l: 1024,
      xl: 1366,
      xxl: 1440,
      xxxl: 1536,
      xxxxl: 1920,
    },
    height: {
      xxxs: 640,
      xxs: 667,
      xs: 736,
      s: 812,
      m: 864,
      l: 896,
      xl: 900,
      xxl: 926,
      xxxl: 962,
      xxxxl: 1080,
    },
  }

  const mediaQueries = {
    xxsUp: `@media only screen and (min-width: ${breakpoints.width.xxs}px)`,
    xxsUpH: `@media only screen and (min-width: ${breakpoints.width.xxs}px) and (min-height: 540px)`,
    xsUp: `@media only screen and (min-width: ${breakpoints.width.xs}px)`,
    xsUpH: `@media only screen and (min-width: ${breakpoints.width.xs}px) and (min-height: 600px)`,
    sUp: `@media only screen and (min-width: ${breakpoints.width.s}px)`,
    sUpM: `@media only screen and (min-width: 600px)`,
    mUp: `@media only screen and (min-width: ${breakpoints.width.m}px)`,
    lUp: `@media only screen and (min-width: ${breakpoints.width.l}px)`,
    xlUp: `@media only screen and (min-width: ${breakpoints.width.xl}px)`,
    xxlUp: `@media only screen and (min-width: ${breakpoints.width.xxl}px)`,
    xxxlUp: `@media only screen and (min-width: ${breakpoints.width.xxxl}px)`,
    xxxxlUp: `@media only screen and (min-width: ${breakpoints.width.xxxxl}px)`,
    xxs: `@media only screen and (max-width: ${breakpoints.width.xxs}px)`,
    s: `@media only screen and (max-width: ${breakpoints.width.s}px)`,
    m: `@media only screen and (max-width: ${breakpoints.width.m}px)`,
  }

  const zIndex = {
    inputBar: 3,
    settings:4,
    modal: 5,
    snackbar: 6,
    tooltip: 7,
  }

  const sizing = {
    headerHeight: 80,
  }

  const controls = {
    label: {
      ...typography.label,
      position: 'relative',
      color: palette.grey[600],
      margin: [16, 0],
    },
    input: {
      ...typography.paragraph,
      letterSpacing: 0.5,
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
      border: `2px solid`,
      backgroundColor: '#fff',
      borderColor: palette.grey[300],
      borderRadius: 12,
      color: palette.input.active,
      padding: spacing * 2,
      outline: 'none',
      textAlign: 'left',
      '&::placeholder': {
        color: palette.input.placeholder,
      },
      '&:hover': {
        borderColor: palette.grey[400],
      },
      '&:focus': {
        borderColor: palette.primary.main,
      },
      '&[readonly], &[disabled]': {
          cursor: 'default',
          border: `none`,
          backgroundColor: palette.disabled.light,
          color: palette.grey[400],
      },
    },
    inputError: {
      extend: 'input',
      borderColor: palette.error.light,
      '& svg': {
        color: palette.error.main,
      },
      '&:focus': {
        borderColor: palette.error.light,
      },
    },
    inputSuccess: {
      extend: 'input',
      borderColor: palette.success.light,
      '& svg': {
        color: palette.success.main,
      },
      '&:focus': {
        borderColor: palette.success.light,
      },
    },
    inputWarning: {
      extend: 'input',
      borderColor: palette.warning.light,
      '& svg': {
        color: palette.warning.main,
      },
      '&:focus': {
        borderColor: palette.warning.light,
      },
    },
    textarea: {
      border: `2px solid`,
      borderColor: palette.grey[300],
    },
    textareaError: {
      extend: 'textarea',
      borderColor: palette.error.light,
      '& svg': {
        color: palette.error.main,
      },
      '&:focus': {
        borderColor: palette.error.light,
      },
    },
    small: {
      ...typography.small,
      color: palette.grey[500],
    },
  }

  const alerts = {
    default: {
      color: palette.primary.main,
      backgroundColor: palette.primary.light,
      borderColor: palette.primary.dark,
    },
    success: {
      color: palette.success.main,
      backgroundColor: palette.success.background,
      borderColor: palette.success.light,
    },
    error: {
      color: palette.error.main,
      backgroundColor: palette.error.background,
      borderColor: palette.error.light,
    },
    warning: {
      color: palette.warning.main,
      backgroundColor: palette.warning.background,
      borderColor: palette.warning.light,
    },
  }

  const grid = {
    container: (size = 1320) =>({
      margin: `0 auto`,
      padding: `3rem 1.5rem`,
      maxWidth: size,
    }),
    row: (columns = 12, gutter = 0) => ({
      display: `grid`,
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: gutter
    }),
    column: (start = 1, end = 12) =>({
      gridColumnStart: 1,
      gridColumnEnd: 13,
      [mediaQueries.xxlUp]: {
        gridColumnStart: start,
        gridColumnEnd: end,
      }
    }),
    centered: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
    },
    start: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'start',
    },
    end: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'end',
    },
    colFlow: {
      gridAutoFlow: 'column',
      gridColumnGap: spacing,
    },
    rowFlow: {
      gridAutoFlow: 'row',
      gridRowGap: spacing,
    },
    gapS: {
      gridColumnGap: spacing,
      gridRowGap: spacing,
    },
    gapM: {
      gridColumnGap: spacing * 2,
      gridRowGap: spacing * 2,
    },
    gapL: {
      gridColumnGap: spacing * 4,
      gridRowGap: spacing * 4,
    },
    noGap: {
      gridColumnGap: 0,
      gridRowGap: 0,
    },
  }

  const flexbox = {
    centered: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    start: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    end: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    spaceBetween: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }

  const truncateText = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }

  const pageStyle = {
    title: {
      color: palette.secondary.main,
      fontSize: 28,
      letterSpacing: 0.25,
      fontWeight: typography.fontWeights.bold,
      marginBottom: 8,
    },
    sectionTitle: {
      color: palette.grey[600],
      fontSize: 16,
      letterSpacing: 0.5,
      fontWeight: typography.fontWeights.regular,
      fontFamily: typography.secondaryFontFamily,
    },
    modalTitle: {
      color: palette.secondary.darker,
      fontSize: 18,
      letterSpacing: 0.5,
      fontWeight: typography.fontWeights.bold,
      fontFamily: typography.secondaryFontFamily,
    },
  }

  const link = {
    cursor: 'pointer',
    textDecoration: 'none',
    color: palette.link.normal,
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
    },
  }

  const jssInstance = create(preset())

  jssInstance.createStyleSheet({
    ...resetCss,
    '@global': {
      'html, body, #root': {
        height: '100vh',
        fontFamily: typography.defaultFontFamily,
        fontSize: typography.defaultFontSize,
        color: palette.text.body,
        backgroundColor: palette.background.body,
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      body: {
        minHeight: '100vh',
      },
      'h1, h2, h3, h4, h5, h6, p, span, small': {
        marginBottom: 0,
      },
      'label, input, textarea, select, button': {
        fontFamily: 'inherit',
      },
      'svg[viewBox="0 0 24 24"]:not([data-color])': {
        fill: palette.icon.inactive,
      },
      a: link,
      h1: typography.h1,
      h2: typography.h2,
      h3: typography.h3,
      h4: typography.h4,
      h5: typography.h5,
      h6: typography.h6,
      p: { ...typography.paragraph, color: palette.grey[600] },
      label: controls.label,
      input: controls.input,
      small: controls.small,
      textarea: {
        ...controls.input,
        overflowWrap: 'break-word',
      },
      form: {
        textAlign: 'left',
      },
      '@keyframes spin': {
        '100%': {
          '-webkit-transform': 'rotate(360deg)',
          transform: 'rotate(360deg)',
        },
      },
    },
  }, { index: 1, meta: 'globals' }).attach()

  return {
    breakpoints,
    mediaQueries,
    zIndex,
    sizing,
    spacing,
    palette,
    controls,
    alerts,
    typography,
    utils: {
      grid,
      flexbox,
      truncateText,
    },
    pageStyle,
    link,
  }
}