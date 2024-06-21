/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Saira', 'sans-serif'],
        // If using Google Font, replace 'CustomFont' with 'Roboto'
        // custom: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'),],
}

