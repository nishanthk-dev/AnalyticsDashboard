/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      // BG
'main-bg': '#2a3447',
'soft-bg': '#384256',
'dark-bg': '#222b3c',
//TEXT
'main-color': 'white',
'soft-color': '#ddd',
'dark-color': '#2a3447',
      }
    },
  },
  plugins: [],
}

