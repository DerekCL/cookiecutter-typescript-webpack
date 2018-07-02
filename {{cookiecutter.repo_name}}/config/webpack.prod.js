const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ],
});
