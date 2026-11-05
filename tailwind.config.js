/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Archivo', '"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
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
        // Neutral ink scale with a faint green undertone, used for text and surfaces
        ink: {
          950: '#0B1410',
          900: '#14201B',
          800: '#24332C',
          700: '#3A4A42',
          600: '#56665E',
          500: '#76857D',
          300: '#C7D1CB',
          200: '#DFE6E1',
          100: '#EEF2EF',
          50: '#F6F8F6',
        },
        forest: {
          DEFAULT: '#0B3D2E',
          light: '#14563F',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,20,16,0.04), 0 4px 16px -4px rgba(11,20,16,0.08)',
        lift: '0 2px 4px rgba(11,20,16,0.04), 0 16px 40px -12px rgba(11,20,16,0.18)',
      },
    },
  },
  plugins: [],
};
