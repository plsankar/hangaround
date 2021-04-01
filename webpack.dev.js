const path = require('path');
const webpackCommon = require('./webpack.common');

module.exports = {
    mode: 'development',
    entry: webpackCommon.entry,
    output: webpackCommon.output,
    module: webpackCommon.module,
    plugins: [...webpackCommon.plugins],
    devtool: 'eval',
};
