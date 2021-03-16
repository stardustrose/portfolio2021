module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html'] // looks for all html files in public folder
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
