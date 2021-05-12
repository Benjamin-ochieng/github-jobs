module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./public/**/*.html', './src/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xs-fluid': 'calc(0.75rem + 0.15vw)',
        'sm-fluid': 'calc(0.8rem + 0.15vw)',
        'base-fluid': 'calc(1rem + 0.15vw)',
        'lg-fluid': 'calc(1.125rem + 0.15vw)',
        'xl-fluid': 'calc(1.3rem + 0.15vw)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: () => ({
        'hero-pattern': "url('/assets/photo-1602452895817-4ffbe522ae50.jpeg')",
      }),
    },
    textColor: (theme) => ({
      ...theme('colors'),
      navy: '#02022E',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      navy: '#02022E',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      navy: '#02022E',
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'checked'],
    },
  },
  plugins: [],
};
