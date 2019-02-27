const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack/dev.config');
const compiler = webpack(webpackConfig);

const app = express()
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.listen(9000, () => console.log('Example app listening on port 9000!'))
