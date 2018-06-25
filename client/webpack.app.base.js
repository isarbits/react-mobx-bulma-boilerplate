var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: [path.join(__dirname, 'src', 'app', 'index')]
    },
    target: 'web',

    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },

    devtool: 'inline-cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                { loader: 'ts-loader', options: { happyPackMode: true } }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader', options: { sourceMap: true }
                }, {
                    loader: 'sass-loader', options: { sourceMap: true }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            checkSyntacticErrors: true,
            watch: ['./src'] // optional but improves performance (fewer stat calls)
        }),
        new ExtractTextPlugin({ disable: true })
    ],

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve('./src'), path.resolve('.'), 'node_modules']
    }
};