/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      transparent: 'transparent',
      white: '#ffffff',
      primary: '#151B72',
      secondary: '#00ADE7',
      moon: '#EDFEFF',
      sandal: '#F9F9F9',
      gray: {
        light: '#f1f5f9',
        DEFAULT: '#cbd5e1',
        dark: '#64748b'
      }
    },
    fontFamily: {
      inter: ['Inter var', ...defaultTheme.fontFamily.sans],
      rubik: ['Rubik', 'sans-serif'],
      ibm: ['IBM Plex Sans', 'sans-serif'],
      funky: ['Luckiest Guy', 'cursive']
    },
    extend: {
      boxShadow: {
        'blue': '-4px 4px 4px #00ADE7',
      },
      blur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'in-out-wobble': 'cubic-bezier(.68,-0.55,0.26,1.35)',
        'down': 'cubic-bezier(.165,.84,.44,1)',
      },
      animation: {
        'slide-in': 'slide 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1 forwards',
        'wobble': 'wob 750ms cubic-bezier(.6,.09,.43,1) 1 forwards',
        'spin-slow': 'spin 3s linear infinite',
        'slide-up': 'slideup 1000ms cubic-bezier(0.65, 0, 0.35, 1) 1 forwards',
        'rise-up': 'riseup 1000ms cubic-bezier(0.21, 0.44, 0.4, 0.96) 1 forwards',
        'progress': 'prog 5000ms linear 1 forwards',
        'spacing': 'space 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 2200ms 1 forwards'
      },
      keyframes: {
        space: {
          "0%": {
            opacity: 0,
            letterSpacing: 20
        },
    
        "100%": {
            opacity: 1,
            letterSpacing: 3
        }
        },
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
            transform: 'scaleX(0.7) scaleY(1.3)',
            opacity: 1
          },
          '100%': {
            transform: 'scaleX(1) scaleY(1)',
            opacity: 1
          },
        },
        spin: {
          'to': {
            transform: 'rotate(360deg)',
          }
        },
        slideup: {
          '0%': {
            transform: 'translateY(200px) rotate(20deg)'
          },
          '100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
        }
      }
    },
  },
  plugins: [],
}
