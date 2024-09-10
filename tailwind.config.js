/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-light': '#5475e5',
        'blue-dark': '#1c3fb7',
        survey: '#e1e8ff',
        'survey-left': '#32a573',
        'survey-right': '#b26a6a',
        red: '#f23030',
        yellow: '#fcd34d',
        option: '#4b5563',
        cancel: '#ced4da',
      },
      animation: {
        'zoom-in': 'zoomIn 0.3s ease-in-out forwards',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      fontFamily: {
        goorm: ['goorm-sans', 'sans-serif'],
      },
      boxShadow: {
        card: '4px 4px 4px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
