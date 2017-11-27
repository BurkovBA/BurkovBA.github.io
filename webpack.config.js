var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src', 'app.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'static/app.[hash:7].js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "src/index.html",
      filename: "index.html"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    hot: true
  },
  devtool: "source-map"
};
