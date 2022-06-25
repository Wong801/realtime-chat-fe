/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#5DB075",
        },
        gray: {
          bg: "#F6F6F6",
          border: "#E8E8E8",
        },
      },
    },
  },
  plugins: [],
};
