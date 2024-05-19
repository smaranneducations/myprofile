/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'calligraphy': ['"Dancing Script"', 'cursive'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica here
      },
    },
  },
  plugins: [],
}
