const makeWebpackConfig = require('./make-webpack-config');

const config = makeWebpackConfig({
  concat: true,
  // commonsChunk: true,
  longTermCaching: true,
  separateStylesheet: true,
  minimize: true,
  devtool: false,
});

module.exports = config;
