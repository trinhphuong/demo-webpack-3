const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const publicPath = '';
module.exports = {
    entry: {
        app: './src/index.js',
    },

    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}