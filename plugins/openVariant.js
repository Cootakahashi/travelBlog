const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group).open &");
  addVariant("faq-open", ":merge(.faq).open &");
});

module.exports = openVariant;
