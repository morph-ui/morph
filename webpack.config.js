var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
      extensions: ['.js', '.html']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader'],
          publicPath: '/'
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8181,
    stats: 'errors-only',
    open: true
  },
  plugins: [
      new HtmlWebpackPlugin({
      title: 'webpack2 config demo',
      /*minify: {
        collapseWhitespace: true
      },*/
      hash: true,
      template: 'src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    })
  ]
}
