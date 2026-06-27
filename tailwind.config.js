/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#0A0A0C',
        charcoal: '#111116',
        gold: '#C9A84C',
        cream: '#F0EEE9',
        steel: '#3A3A45',
        'gold-dark': '#A8872E',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'slide-in-half': {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease-out forwards',
        'fade-up-delay': 'fade-up 1s ease-out 0.3s forwards',
        'fade-up-delay-2': 'fade-up 1s ease-out 0.6s forwards',
        'slide-in': 'slide-in 1.2s ease-out 0.8s forwards',
        'slide-in-half': 'slide-in-half 1.2s ease-out 1s forwards',
      },
    },
  },
  plugins: [],
};
