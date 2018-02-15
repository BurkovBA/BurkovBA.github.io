var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  // set variables, depending on whether this is dev or prod, see: https://github.com/webpack/webpack/issues/2254
  var indexFilename = (env && env.prod) ? path.join(__dirname, "index.html") : "index.html";
  var publicPath = (env && env.prod) ? '/dist/' : '/';

  return {
    entry: path.join(__dirname, 'src', 'app.jsx'),
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: publicPath,
      filename: 'app.js' //'app.[hash:7].js'
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: "body",
        template: "src/index.html",
        filename: indexFilename
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery'
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react'],
            plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
          }
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: {sourceMap: true} },
            { loader: 'sass-loader', options: {sourceMap: true} }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000'
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
      contentBase: './',
      hot: true
    },
    devtool: "source-map"
  };
};
