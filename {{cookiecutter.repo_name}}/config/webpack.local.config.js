import webpack from 'webpack';

import baseConfig from './webpack.base.config.js';


module.exports = (opts) => {

  const config = baseConfig(opts);

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.NoErrorsPlugin(),
    ],
  };
};
