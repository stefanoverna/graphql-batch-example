const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: __dirname + '/src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' } },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DatoCMS plugin',
      minify: isProduction,
    }),
  ],
}
