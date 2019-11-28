var path = require('path')
var src = path.join(__dirname, '/src')
var dist = path.join(__dirname, '/dist')

module.exports = {
  entry: `${src}/index.js`,
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
}
