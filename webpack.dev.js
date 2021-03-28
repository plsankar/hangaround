const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackCommon = require('./webpack.common');

module.exports = {
    mode: 'development',
    entry: webpackCommon.entry,
    output: webpackCommon.output,
    module: webpackCommon.module,
    plugins: [...webpackCommon.plugins, new CleanWebpackPlugin()],
    devtool: 'eval',
};
