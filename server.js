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

// Wrap webpack compile in a try catch.
// function compile(config, cb) {
//   let compiler;
//   try {
//     compiler = webpack(config);
//   } catch (e) {
//     printErrors('Failed to compile.', [e]);
//     process.exit(1);
//   }
//   compiler.run((err, stats) => {
//     console.log('stats', stats)
//     // console.log(JSON.stringify(stats, null, '  '))
//     cb(err, stats);
//   });
// }
