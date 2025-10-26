/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ all React files
    "./public/index.html",         // optional but recommended
  ],
  theme: {
    extend: {
      colors: {
        // Kenyan flag color palette
        kenya: {
          black: '#000000',
          red: {
            DEFAULT: '#BB0000',
            light: '#DC143C',
            dark: '#8B0000',
          },
          green: {
            DEFAULT: '#006600',
            light: '#228B22',
            dark: '#004d00',
          },
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
