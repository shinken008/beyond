const path = require('path');
const publicPath = path.resolve(__dirname, '..', 'public')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    'main': path.resolve(__dirname, '..', 'src/client/index.tsx'),
    'login': path.resolve(__dirname, '..', 'src/client/login.ts')
  },
  output: {
    filename: 'assets/js/[name].[chunkhash].js',
    path: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/images/[name]-[hash:8].[ext]'
            }
          },
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['@svgr/webpack', 'file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/client/index.html'),
      filename: `index.html`,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/client/login.html'),
      filename: `login.html`,
      chunks: ['login'],
    }),
    // Extract our CSS into a files.
    new MiniCssExtractPlugin({
      filename: 'assets/css/bundle.[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
      // allChunks: true because we want all css to be included in the main
      // css bundle when doing code splitting to avoid FOUC:
      // https://github.com/facebook/create-react-app/issues/2415
      allChunks: true,
    }),
  ]
};