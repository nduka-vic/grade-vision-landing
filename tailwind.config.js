/** @type {import('tailwindcss').Config} */
export default {
  //   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      // Optional: extend colors, fonts, etc.
      // enables smooth scroll
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [],
};
