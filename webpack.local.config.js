var webpack = require('webpack');

var filepath = "build/";

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', filepath + 'bundle-vendor.js');
var envPlugin = new webpack.DefinePlugin({
  'process.env': {
      'NODE_ENV': JSON.stringify('development'),
   }
});

module.exports = {

  // Efficiently evaluate modules with source maps
  //devtool: "eval",
  //devtool: "source-map",

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:9090',
      "webpack/hot/only-dev-server",
      './src/entry.jsx'
    ],
    vendor: ['react', 'redux', 'react-redux', 'redux-thunk' ]
  },
  output: {
    filename: filepath + 'bundle-[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel-loader'] ,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  plugins: [
    commonsPlugin,
    envPlugin
  ]
};
