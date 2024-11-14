/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom" : "0px -1px 0px 0px #F0F0F0 inset"
      }
    },
  },
  plugins: [],
}