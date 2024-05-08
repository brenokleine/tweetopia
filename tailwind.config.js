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
  },
  plugins: [],
}