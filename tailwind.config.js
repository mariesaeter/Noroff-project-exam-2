/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "fantasy-blue": {
        main: "#005289",
        active: "#003252",
        hover: "#004B7A",
      },
      "sky-blue": {
        light: "#D6EFFF",
        dark: "#85D0FF",
      },
      "earth-brown": {
        light: "#C9C0BA",
        mid: "#CB904D",
        dark: "#8E5F29",
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
    extend: {},
  },
  plugins: [],
};
