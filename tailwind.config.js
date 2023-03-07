module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moving: {
          "100%": {
            translate: "0% 0%",
          },
          "0%": {
            translate: "0% -50%",
          },
        },
      },
      animation: {
        moving: "moving 0.4s linear",
      },
    },
  },
  plugins: [require("./plugins/animationDelay")],
};
