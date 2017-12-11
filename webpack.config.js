var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ZipPlugin = require('zip-webpack-plugin');

var package = require('./package.json');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader'],
          publicPath: '/'
        })
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8181,
    stats: 'errors-only',
    open: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
      new HtmlWebpackPlugin({
      title: 'morph' + package.version,
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
    }),
    new ZipPlugin({
      path: './zip',
      pathPrefix: 'dist',
      exclude: [/\.js$/, /\.html$/],
      filename: 'morph-' + package.version +'.zip',
      zipOptions: {
        forceZip64Format: false,
      },
    })
  ]
}
