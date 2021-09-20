const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: require('./rules.webpack'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '..', 'src', 'assets'),
          to: path.join(__dirname, '..', '.webpack', 'renderer', 'assets'),
        },
      ],
    }),
  ],
};
