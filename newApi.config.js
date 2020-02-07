
let path = require('path');

module.exports = {
  entry: './components/newsapi/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts/newsapi'),
    filename: '[name].js'
  },
  devtool: 'source-map',
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