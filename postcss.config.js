const autoprefixer =  require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const sorting = require('postcss-sorting')
const sortingConfig = require('./postcss.sorting.config')

module.exports = {
    plugins: [
      autoprefixer({
        browsers: [
          'ios >= 9',
          'android >= 4.4'
        ]
      }),
      pxtorem({
        rootValue: 75,
        unitPrecision: 2,
        propList: ['*', '!font*'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      }),
      sorting(sortingConfig)
    ]
  };  