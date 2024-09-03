/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--primary-font)",
        secondary: "var(--secondary-font)",
      },
      colors: {
        primary: "var(--primary-fcolor)",
        secondary: "var(--secondary-fcolor)",
      },
    },
  },
  plugins: [],
};
