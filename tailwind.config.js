/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./*.html"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        'gstlColor': '#01122E',
        'gstlColorLight': '#3383ED',
        'gstlColorDark': '#000C1C',
        'gstlColorBorder': '#1762A7',
        'gstlColorText': '#FFFFFF'
      },
    },
  },
  plugins: [],
}
