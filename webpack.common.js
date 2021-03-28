var path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { app: './src/index.js' },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'app'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
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
        new htmlWebpackPlugin({
            title: 'hangaround',
            template: './src/index.html',
            inject: 'body',
        }),
    ],
};
