const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
     contentBase: path.join(__dirname, 'dist'),
     filename: 'bundle.js',
    proxy: {
      '/Video': 'http://localhost:5000',
      // changeOrigin: true
    }
  }
};


