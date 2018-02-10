const nodeExternals = require('webpack-node-externals');
const path = require('path');


// config idea mainly take from here:
// https://medium.com/front-end-hacking/adding-a-server-side-rendering-support-for-an-existing-react-application-using-express-and-webpack-5a3d60cf9762
module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, '..', 'src/server/index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/dist/',
        filename: 'server.js',
        library: 'app',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            components: path.resolve(__dirname, '..', 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: 'css-loader/locals'
            },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader?emitFile=false'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?emitFile=false'
            }
        ]
    }
};