const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: {
        import: './src/index.js',
        dependOn: 'shared',
      },
      shared: 'lodash',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cld-js-sdk-docs-examples',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};