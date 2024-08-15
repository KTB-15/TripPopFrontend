/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-light': '#5475e5',
        'blue-dark': '#1c3fb7',
        red: '#f23030',
        yellow: '#fcd34d',
      },
    },
  },
  plugins: [],
};
