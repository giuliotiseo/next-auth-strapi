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
        title: ['var(--font-montserrat)'],
        sans: ['var(--font-source_sans_pro)'],
      },
      colors: {
        primary: "#049CA4",
        secondary: "#319ED7",
        lightBlue: "#EEF1F7",
        light: "#FFFBFB",
        dark: "#1C232E"
      },
      // backgroundImage: {
      //   'service': "url('/test/test-bg.png')",
      // },
    },
  },
  plugins: [],
}
