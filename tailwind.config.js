/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#00ADE7',
      secondary: '#151B72',
      white: '#ffffff',
      moon: '#e5f2f7',
      transparent: 'transparent'
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      funky: ['Luckiest Guy', 'cursive'],
      sora: ['Sora', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'blue': '-4px 4px 4px #00ADE7',
      },
      blur: {
        xs: '2px',
      },

      animation: {
        'slide-in': 'slide 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'wobble': 'wob 0.5s ease-in-out 1',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(1rem)' }
        },
        wob: {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '50%': { transform: 'scaleX(0.7) scaleY(1.3)' },
          '100%': { transform: 'scaleX(1) scaleY(1)' },
        },
        spin: {
          'to': {
            transform: 'rotate(360deg)',
          }
        }
      }
    },
  },
  plugins: [],
}
