
let path = require('path');

module.exports = {
  entry: './components/youtube/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts/youtube'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
}