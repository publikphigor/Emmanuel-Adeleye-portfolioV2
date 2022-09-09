/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#1FC6BB",
        "brand-secondary": "#EDB62C",
        "brand-black": "#121212",
        "brand-gray": "#A1A1A1",
        "brand-gray-200": "#F1F1F1",
        "brand-gray-300": "#1C1C1C",
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
