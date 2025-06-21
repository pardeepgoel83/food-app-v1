/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1536px',
    // },
    colors: {
      blue: {
        DEFAULT: '#1fb6ff',
      },
      purple: {
        DEFAULT: '#7e5bef',
      },
      pink: {
        DEFAULT: '#ff49db',
      },
      orange: {
        DEFAULT: '#ff7849',
      },
      green: {
        DEFAULT: '#13ce66',
      },
      yellow: {
        DEFAULT: '#ffc82c',
      },
      'gray-dark': {
        DEFAULT: '#273444',
      },
      gray: {
        DEFAULT: '#8492a6',
      },
      'gray-light': {
        DEFAULT: '#d3dce6',
      },
    },
    fontSize: {
      heading: '16px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    extend: {
    }
  },
  plugins: [],
}

