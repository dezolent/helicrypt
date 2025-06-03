/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F1FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          500: '#0077FF',
          600: '#005FCC',
          700: '#004799',
          800: '#003066',
          900: '#001833',
        },
        secondary: {
          50: '#E6FFF8',
          100: '#CCFFF1',
          200: '#99FFE3',
          300: '#66FFD6',
          400: '#33FFC8',
          500: '#00FFBA',
          600: '#00CC95',
          700: '#009970',
          800: '#00664B',
          900: '#003325',
        },
        accent: {
          50: '#EFE6FF',
          100: '#DFCCFF',
          200: '#BF99FF',
          300: '#9F66FF',
          400: '#7F33FF',
          500: '#6E44FF',
          600: '#5800E6',
          700: '#4300AD',
          800: '#2D0073',
          900: '#16003A',
        },
        dark: {
          100: '#CCD6F6',
          200: '#8892B0',
          300: '#495670',
          400: '#283149',
          500: '#172A45',
          600: '#0A192F',
        },
        success: {
          100: '#E0F2E9',
          300: '#A3D9B9',
          500: '#66BF8A',
          700: '#2E8A5A',
          900: '#0F5933',
        },
        warning: {
          100: '#FFF6E0',
          300: '#FFE3A3',
          500: '#FFD166',
          700: '#E6AC00',
          900: '#8C6900',
        },
        error: {
          100: '#FFEBF0',
          300: '#FFC0CE',
          500: '#FF647C',
          700: '#D92A49',
          900: '#8C0E25',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'dna-rotate': 'dna-rotate 15s linear infinite',
      },
      keyframes: {
        'dna-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};