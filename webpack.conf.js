'use strict';

var path = require('path');
var cwd = __dirname;

module.exports = {
  entry: './src/client.js',
  output: {
    filename: './static/client.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  colors: true,
  devtool: 'source-map',
};
