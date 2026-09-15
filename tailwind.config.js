/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosewood: {
          blue: "#1d4ed8", // Elegant Royal Deep Blue
          "blue-dark": "#1e40af",
          sky: "#0284c7",
          dark: "#0f172a", // Deep slate
          charcoal: "#1e293b",
          light: "#f8fafc",
          muted: "#64748b",
          border: "#e2e8f0",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
