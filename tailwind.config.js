/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#040B14",
        secondary: "#36ABE2",
        textSecondary: "#393939",
        text: "#a49e9e",
        facebook: "#1877F2",
        linkedin: "#0E76A8",
        instagram: "#CD2779",
      },
    },
  },
  plugins: [],
};
