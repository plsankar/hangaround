const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { popup: './src/index.js' },
    output: {
        filename: 'popup/[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jp?eg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{ from: 'public' }],
        }),
        new HtmlWebpackPlugin({
            filename: 'popup/popup.html',
            title: 'hangaround',
            template: './src/index.html',
            inject: 'body',
        }),
    ],
};
