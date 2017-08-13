var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var package = require('./package.json');
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
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loader: "file-loader?name=icons/[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
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
      title: 'morph',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: 'src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'morph-'+ package.version +'.css',
      disable: false,
      allChunks: true
    })
  ]
}
