const path = require('path');
const webpackCommon = require('./webpack.common');
// const ExtensionReloader = require('webpack-extension-reloader');

module.exports = {
    mode: 'development',
    entry: webpackCommon.entry,
    output: webpackCommon.output,
    module: webpackCommon.module,
    plugins: [
        ...webpackCommon.plugins,
        // new ExtensionReloader({
        //     // manifest: path.resolve(__dirname, 'public', 'manifest.json'),
        //     port: 9090, // Which port use to create the server
        //     reloadPage: true, // Force the reload of the page also
        //     entries: {
        //         // The entries used for the content/background scripts or extension pages
        //         contentScript: 'contentscript',
        //         background: 'background',
        //         extensionPage: 'popup',
        //     },
        // }),
    ],
    devtool: 'eval',
};
