/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trade: {
          red: "#dc2626", // Primary Trade Red like Reference Image 2
          "red-dark": "#b91c1c",
          "red-light": "#ef4444",
          dark: "#0f172a", // Dark charcoal for headers & contact
          charcoal: "#1e293b",
          light: "#f8fafc", // Section background
          border: "#e2e8f0",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
