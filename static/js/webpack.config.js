module.exports = {
  entry: {
    app: './src/main.js',
  // test: 'test/test.js',
  },
  output: {
    filename: 'bundle.min.js',
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