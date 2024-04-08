/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#F4E9E3",
        secondary: "#7E8427",
        success: "#C89374",
        dark: "#000000",
        light: "#FFFFFF",
        borderLine: "#CCC2BE",
        light_gray: "#777777",
        dark_gray: "#4d4d4d",
      },
    },
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      hind: ["hind", "sans-serif"],
    },
  },
  plugins: [],
};
