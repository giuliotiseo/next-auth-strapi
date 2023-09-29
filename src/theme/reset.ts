const resetCss = {
  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  '@global *:where(:not(iframe, canvas, img, svg, video):not(svg *))': {
    all: 'unset',
    display: 'revert',
  },
  /* Preferred box-sizing value */
  '@global *, *::before, *::after': {
    boxSizing: 'border-box',
  },
  /* Remove list styles (bullets/numbers) */
  '@global ol, ul': {
    listStyle: 'none',
  },
  /* For images to not be able to exceed their container */
  '@global img': {
    maxWidth: '100%',
  },
  /* Removes spacing between cells in tables */
  '@global table': {
    borderCollapse: 'collapse',
  },
  /* Revert the 'white-space' property for textarea elements on Safari */
  '@global textarea': {
    whiteSpace: 'revert',
  },
}

export default resetCss
