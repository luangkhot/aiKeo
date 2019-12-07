// const path = require('path')


module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: '@import "./public/scss/main.scss";'
        }
      }
    }
  };