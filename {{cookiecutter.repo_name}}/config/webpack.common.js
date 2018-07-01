const path = require('path');

// TODO: When we move to newer Node, use "tsconfig-paths-webpack-plugin" and
// erase `resolve.alias`.

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'dist/program-web.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
        "@src": path.resolve(__dirname, "src"),
    },
  },
};
