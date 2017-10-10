
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extensions = ['.js','.jsx'];

module.exports = {
    entry: path.resolve(__dirname, '../client/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/assets/'), //webpack打包后存放的绝对路径
        publicPath: path.resolve(__dirname, '/assets/')  //webpack打包后在服务器上的路径
    },

    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })),
        },{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    },

    resolve: {
        extensions: extensions
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        })
    ]
};