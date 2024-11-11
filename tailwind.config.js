const { DEFAULT_RUNTIME_WEBPACK } = require("next/dist/shared/lib/constants");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      centered: true,
      padding: "15px",
    },

    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },

    fontFamily: {
      primary: "var(--font-bebas)",
      secondary: "var(--font-inter)",
    },

    extend: {
      colors: {
        primary: "#10151f",
        secondary: "#475467",
        accent: {
          DEFAULT: "#fcc0ed",
          hover: "#d536eb",
        },
      },
      boxShadow: {
        DEFAULT: "0px 14px 54px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
