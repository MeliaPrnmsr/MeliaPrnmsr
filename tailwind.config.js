/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind-components/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

