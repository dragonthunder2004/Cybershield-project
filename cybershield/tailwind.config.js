/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a73bc',
        background: '#111517',
        surface: '#1c2226',
        border: '#3d4852',
        text: {
          primary: '#ffffff',
          secondary: '#9eacb7'
        }
      },
      fontFamily: {
        sans: ['Public Sans', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
