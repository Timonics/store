/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mypink": "#fbcfe8",
        "mypurple": "#e9d5ff",
        "myindigo": "#c7d2fe"
      }
    },
  },
  plugins: [],
};
