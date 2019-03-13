const path = require('path');

const commonConfig = require('./common.config')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    compress: true,
    port: 9000,
    proxy: [ // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/login', '/logout'],  // can have multiple
        target: 'http://localhost:8080', // server and port to redirect to
        secure: false,
      },
    ],
  },
  ...commonConfig,
};