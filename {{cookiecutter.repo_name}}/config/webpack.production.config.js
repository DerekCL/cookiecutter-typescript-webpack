import path from 'path';
import webpack from 'webpack';

import baseConfig from './webpack.base.config.js';


module.exports = (opts) => {

  const
    {CDN_PATH, PROJECT_ROOT} = opts,
    config = baseConfig(opts);

  return {
    ...config,
    output: {
      ...config.output,
      path: path.resolve(PROJECT_ROOT, '{{ cookiecutter.production_output_path }}'),
      // set CDN_PATH to your cdn static file directory
      publicPath: CDN_PATH || '/',
    },
    plugins: [
      ...config.plugins,
      // pass options to uglify
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      // minifies your code
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      }),
      // removes duplicate modules
      new webpack.optimize.DedupePlugin(),
    ],
  };
};
