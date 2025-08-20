/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  // <-- all JS/TS files in src will be scanned
  ],
  theme: {
    extend: {},                     // <-- optional, for custom colors, spacing, etc.
  },
  plugins: [],                      // <-- optional, add Tailwind plugins here
}
