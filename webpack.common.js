const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const publicPath = '';
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}