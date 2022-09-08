/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#1FC6BB",
        "brand-secondary": "#EDB62C",
        bg_dark: "#121212",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        mangolaine: ["Mangolaine", "sans-serif"],
      },
    },
  },
  plugins: [],
};
