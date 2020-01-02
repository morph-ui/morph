/*
  autoprefixer - https://github.com/postcss/autoprefixer
  cssnano - https://github.com/hail2u/node-css-mqpacker
  css-mqpacker - HAS BEEN REMOVED! Do not use!
*/

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-conditionals'),
    require('postcss-nested'),
    require('postcss-extend'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}
