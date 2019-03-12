const path = require('path');
const publicPath = path.resolve(__dirname, '..', 'public')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    'main': path.resolve(__dirname, '..', 'src/client/index.tsx'),
    'login': path.resolve(__dirname, '..', 'src/client/login.ts')
  },
  output: {
    filename: 'assets/[name].[chunkhash].js',
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name]-[hash:8].[ext]'
            }
          },
        ]
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
    })
  ]
};