/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-header': '4px 0px 10px 0px rgba(47, 122, 249, 0.1)',
        'custom-card': '5px 5px 10px 0px #0000001A'

      },
    },
  },
  plugins: [],
}

