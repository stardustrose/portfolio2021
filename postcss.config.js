const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    autoprefixer({
      flexbox: true,
      grid: true
    }),
  ]
}
