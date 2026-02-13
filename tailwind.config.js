/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial"],
      },
      colors: {
        ink: "#0B0D0F",
      },
    },
  },
  plugins: [],
};
