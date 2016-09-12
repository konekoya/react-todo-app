module.exports = {
  entry: ['./src/app.js'],
  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }

};