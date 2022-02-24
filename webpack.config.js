const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    video: './src/videos.js', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cld-js-sdk-docs-examples',
      excludeChunks: [ 'video' ]
    }),
    new HtmlWebpackPlugin({
      title: 'cld-js-sdk-docs-video-examples',
      filename: 'videos.html',
      excludeChunks: [ 'index' ]
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