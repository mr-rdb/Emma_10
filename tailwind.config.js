/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
      },
    },
    colors: {
      "app-green": "#1CD760",
      "app-text-green": "#89FC00",
      "app-yellow": "#F7DC03",
      "app-grey": "#302F33",
      "app-dark-grey": "#202022",
      "app-white": "#FFFFFF",
      "app-blue": "#00BAFF",
    },
  },
  plugins: [],
};
