const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackCommon = require('./webpack.common');

module.exports = {
    mode: 'production',
    entry: webpackCommon.entry,
    output: webpackCommon.output,
    module: webpackCommon.module,
    optimization: {
        minimize: true,
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [...webpackCommon.plugins, new BundleAnalyzerPlugin()],
    devtool: false,
};
