// const nodeExternals = require('webpack-node-externals');
const path = require('path');


// config idea mainly take from here:
// https://medium.com/front-end-hacking/adding-a-server-side-rendering-support-for-an-existing-react-application-using-express-and-webpack-5a3d60cf9762
module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, 'src', 'server', 'app.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'server.js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
  },
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
        loader: 'url-loader?emitFile=false'
      },
      {
        test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?emitFile=false'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?emitFile=false'
      }
    ]
  }
};