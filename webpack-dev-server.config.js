const makeWebpackConfig = require('./make-webpack-config');

const config = makeWebpackConfig({
  devServer: true,
  devtool: 'inline-source-map',
  separateStylesheet: true,
  debug: true,
  watch: true,
});

module.exports = config;
