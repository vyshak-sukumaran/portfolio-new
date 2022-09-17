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
      moon: '#defcf9',
      grey: '#d9dcdd',
      black: '#000000',
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
        'slide-in': 'slide 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1 forwards',
        'wobble': 'wob 750ms cubic-bezier(.6,.09,.43,1) 1 forwards',
        'spin-slow': 'spin 3s linear infinite',
        'slide-up': 'slideup 1000ms cubic-bezier(0.65, 0, 0.35, 1) 1 forwards',
        'rise-up': 'riseup 1000ms cubic-bezier(0.21, 0.44, 0.4, 0.96) 1 forwards',
        'progress': 'prog 5000ms linear 1 forwards'
      },
      keyframes: {
        prog: {
          "0%": {
            width: "100%"
          },
          "100%": {
            width: 0
          }
        },
        riseup: {
          '0%': {
            transform: 'translateY(200px)'
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          }
        },
        slide: {
          '0%': { transform: 'translateX(-80px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        wob: {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '50%': { 
            transform: 'scaleX(0.7) scaleY(1.3)' ,
            opacity: 1
          },
          '100%': { 
            transform: 'scaleX(1) scaleY(1)' ,
            opacity: 1
          },
        },
        spin: {
          'to': {
            transform: 'rotate(360deg)',
          }
        },
        slideup: {
          '0%' : {
            transform: 'translateY(200px) rotate(20deg)'
          },
          '100%' : {
            transform: 'translateY(0px) rotate(0deg)'
          },
        }
      }
    },
  },
  plugins: [],
}
