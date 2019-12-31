const path = require('path');

module.exports = {
  mode: "development",
  entry: "./client/app.jsx",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env']
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
    ],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'public/resources')
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
}