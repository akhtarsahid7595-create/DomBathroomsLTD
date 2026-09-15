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
          blue: "#2563eb", // Primary Ocean Royal Blue
          "blue-dark": "#1d4ed8",
          "blue-light": "#38bdf8",
          sky: "#0284c7",
          dark: "#0f172a", // Dark navy for footer & overlays
          charcoal: "#1e293b",
          light: "#f0f9ff", // Light blue-tinted white section background
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
