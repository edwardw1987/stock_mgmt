module.exports = {
  entry: {
    app: ['./angular.min.js', './angular-animate.min.js','./src/main.js'],
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