
let path = require('path');

module.exports = {
  entry: './components/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: '[name].js'
  },
  module: {
    mode: 'development',
    devtool: 'source-map',
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
