/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-outfit)'],
        sans: ['var(--font-switzer)'],
      },
      colors: {
        primary: "#0D66C4",
        secondary: "#FDC500",
        lightBlue: "#EEF1F7",
        light: "#FCFAF9",
        dark: "#0A172E"
      },
      backgroundImage: {
        'service': "url('/test/test-bg.png')",
      },
    },
  },
  plugins: [],
}
