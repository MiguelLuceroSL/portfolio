/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ['"Courier New"', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}