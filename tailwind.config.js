/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "fantasy-blue": {
        DEFAULT: "#005289",
        active: "#003252",
        hover: "#004B7A",
      },
      "sky-blue": {
        light: "#D6EFFF",
        dark: "#85D0FF",
      },
      "earth-brown": {
        light: "#C9C0BA",
        DEFAULT: "#CB904D",
        dark: "#8E5F29",
      },
      body: {
        white: "#F8F3F1",
        black: "#171412",
      },
      error: {
        light: "#E24536",
        dark: "#B32619",
      },
      warning: "#EDC25E",
      success: "#ACD161",
      "rose-white": "#F8F3F1",
      "dark-gray": "#171412",
    },
    fontFamily: {
      sans: ["Ledger", "sans-serif"],
      serif: ["Josefin Slab", "serif"],
    },
    extend: {
      margin: {
        5.5: "1.389rem",
        6.5: "1.667rem",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },

  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px", letterSpacing: "0.025em" },
      });
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
