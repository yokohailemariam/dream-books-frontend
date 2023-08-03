/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm300: '400px',
        sm700: '700px'
      }
    }
  },
  plugins: []
}
