/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        Courgette: ['"Courgette"', 'serif'],
        Vollkorn: ['"Vollkorn"', 'serif'],
      },
    },
  },
  plugins: [],
}

