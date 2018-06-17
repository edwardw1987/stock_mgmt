module.exports = {
  entry: {
    app: [
      './src/main.js'
    ],
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }],
    }]
  }
}