const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      },
      {
        values: theme("animationDelay"),
      }
    );
  },
  {
    theme: {
      animationDelay: {
        100: "100ms",
        200: "200ms",
      },
    },
  }
);

module.exports = animationDelay;
