/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2563eb', dark: '#1e40af' },
        text: { DEFAULT: '#1f2937', light: '#4b5563' },
        bg: '#f9fafb',
        card: '#fff',
        border: '#d1d5db',
      },
      spacing: {
        's-sm': '.5rem',
        's-md': '1rem',
        's-lg': '1.5rem',
      },
      borderRadius: {
        DEFAULT: '.375rem',
      },
      animation: {
        pulse: 'pulse 1.5s infinite',
        spin: 'spin 1s linear infinite',
        slideIn: 'slideIn .3s',
        shake: 'shake .3s',
        confetti: 'confetti 2s ease-out forwards',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        slideIn: {
          from: { transform: 'translateY(-2rem)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}