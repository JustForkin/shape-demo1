var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  context: __dirname + "/",
  entry: [
    __dirname + '/js/app.babel.js'
  ],
  module: {
    loaders: [
      { test: /\.(json)$/, exclude: /node_modules/, loaders: ['json-loader'] },
      // { test: /\.(jsx|es6.js|babel.js)$/, exclude: /node_modules/, loaders: ['babel-loader?presets[]=es2015-loose,plugins[]=transform-runtime'] },
      { test: /\.(jsx|es6.js|babel.js|.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015-loose', 'babel-preset-stage-2' ],
          plugins: [ 'transform-runtime' ]
        }
      },
      { test: /\.jade$/, loaders: ['jade'] },
      { test: /\.(postcss.css)$/,  loader: "style-loader!css-loader!postcss-loader" },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.(eot|woff|ttf|svg|png|jpg|wav|mp3)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      }
    ]
  },
  postcss: function () {
    return [ require('precss'), require('postcss-cssnext'), require('postcss-modules') ];
  },
  output: {
    path:         __dirname + '/build',
    filename:     'app.js',
    publicPath:   'build/'
  },
  plugins: [],
  resolve: {
    root: [ path.resolve('./'), path.resolve('./css/') ],
    moduleDirectories: ['node_modules'],
    target: 'node',
    extensions: [
      '', '.js', '.es6', '.babel.js', '.coffee',
      '.postcss.css', '.css', '.json'
    ]
  }
};
