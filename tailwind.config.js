/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        secondary: "#4b5563",
        dark: "#111827",
      },
    },
  },
  plugins: [],
};
