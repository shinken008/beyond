const path = require('path');
const webpack = require('webpack')
const publicPath = path.resolve(__dirname, '..', 'public')

const commonConfig = require('./common.config')

module.exports = {
  ...commonConfig,
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    // hot: true, // 浏览器刷新
    hotOnly: true, // 只进行热更新，浏览器不刷新，发送update.json
    port: 9000,
    proxy: [ // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/login', '/logout'],  // can have multiple
        target: 'http://localhost:8080', // server and port to redirect to
        changeOrigin: true,
        secure: false,
        toProxy: true,
      },
    ],
  },
  output: {
    filename: 'assets/js/[name].js', // 开发环境不使用hash，生成固定的文件名，热更新使用
    path: publicPath,
  },
  plugins: [
    ...commonConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
};