/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        base: "51.5625rem",
      },
      fontFamily: {
        halvetica: ["Halvetica", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#303030",
          red: "#bb0a1e",
          cream: "#f8f7f4",
          purple: "#4e5cf6",
          gray: {
            100: "#c9c6c6",
            200: "#d3d3d3",
            300: "#656565",
            400: "#565563",
          },
        },
      },
    },
  },
  plugins: [],
};
