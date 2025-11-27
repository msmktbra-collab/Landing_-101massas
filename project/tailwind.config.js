/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        cta: {
          500: '#3d8a3c',
          600: '#347433',
          700: '#2a5f29',
        },
        gold: {
          400: '#ffd54f',
          500: '#FFC107',
          600: '#e6ac00',
        },
        accent: {
          500: '#FF6F3C',
          600: '#e5602f',
        },
        urgency: {
          500: '#c92a2a',
          600: '#B22222',
          700: '#8b1a1a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
};
