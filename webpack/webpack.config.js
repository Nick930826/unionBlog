
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const extensions = ['.js','.jsx'];

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../client/index.js'),
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/assets/'), //webpack打包后存放的绝对路径
        publicPath: `http://localhost:3001/assets`  //webpack打包后在服务器上的路径
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
            exclude: /node_modules/
        },{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }],
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../dist/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new OpenBrowserPlugin({
            url: 'http://localhost:3001/dist'
        }),
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        })
    ],
    devServer: {
        proxy: {
            "/tc": "http://139.196.137.235",
            "/toutiao": "http://139.196.137.235",
            "/bole": "http://139.196.137.235",
            "/seg": "http://139.196.137.235",
        },
        hot: true,
        port: 3001,
        //contentBase: `http://localhost:3001/assets`
    }
};