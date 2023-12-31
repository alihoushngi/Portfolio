/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      sm: "10px",
      md: "14px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "30px",
    },

    extend: {
      colors: {
        primary: "#fffff",
        secondary: "#2a2935",
        sadafi: "#E8E2E2",
        glassMorphism: "rgba(255, 255, 255, 0.2)",
        smokeWhite: "#F5F5F5",
        white: "#FFFFFF",
        black: "#212121",
        success: "#3BD49B",
        warning: "#FFE15D",
        error: "#DC3535",
      },
      animation: {
        "moving-bars": "4s linear infinite",
      },
    },
  },
  plugins: [],
};
