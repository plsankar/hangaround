const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
        new GoogleFontsPlugin({
            fonts: [
                {
                    family: 'Fira Sans',
                    variants: [
                        '500',
                        '600',
                        '700',
                        '800',
                        'regular',
                        'italic',
                        '500italic',
                        '600italic',
                        '700italic',
                        '800italic',
                    ],
                },
            ],
            filename: 'popup/fonts.css',
            path: 'popup/fonts/',
            formats: ['woff2'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css',
        }),
    ],
};
