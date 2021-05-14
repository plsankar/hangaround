const path = require('path');
const webpackCommon = require('./webpack.common');

module.exports = {
    mode: 'development',
    entry: webpackCommon.entry,
    output: webpackCommon.output,
    module: webpackCommon.module,
    resolve: webpackCommon.resolve,
    plugins: [...webpackCommon.plugins],
    devtool: 'eval',
};
