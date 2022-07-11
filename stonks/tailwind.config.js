/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        slate: {
          950: "#0e1526",
          1000: "#0a0f1b",
        },
      },
    },
  },
  plugins: [],
}
