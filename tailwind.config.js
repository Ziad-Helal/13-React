/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    height: {
      screen: "100svh",
      full: "100%",
      auto: "auto",
    },
    minHeight: {
      screen: "100svh",
      full: "100%",
      auto: "auto",
    },
    maxHeight: {
      screen: "100svh",
      full: "100%",
      auto: "auto",
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        foreground: "var(--foreground-color)",
        background: "var(--background-color)",
      },
    },
  },
  plugins: [],
};
