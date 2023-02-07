module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff6b81",
        secondary: "#fff",
        primary: "#000000",
        bgcolor: "#f9f9f9",
        paragraph: "#888",
        footerbg: "#081828",
      },
      fontFamily: {
        body: ["Archivo"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("daisyui")],
};
