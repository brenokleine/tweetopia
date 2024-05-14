/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#092635',
        secondary: '#1B4242',
        tertiary: '#5C8374',
        quaternary: '#9EC8B9',
      }
    },
    screens: {
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      'xxl': '1400px', // Extra extra large
      'gridBreakpoint': '930px',
    },
  },
  plugins: [],
}