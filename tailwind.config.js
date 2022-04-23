module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'segoebold': ['Segoe-UI-Semibold'],
      'segoe' : ['Segoe-UI'],
      'gilroy' : ['Gilroy-ExtraBold']
    },

    screens: {
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    extend: {
      boxShadow: {
        'button' : '0 8px 8px 0 rgba (0 0 0 0.1)'
      },
      colors: {
        'primary' : '#F24130'
      },
      width: {
        '19' : '4.75rem',
        '22' : '5.5rem',
        '31' : '7.75rem'
      },
      height: {
        '19' : '4.75rem',
        '22' : '5.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
