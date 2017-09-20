const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD_ENV || '0');
const path = require('path');

const PATHS = {
  build: path.join(__dirname, './public')
};


module.exports = {

  entry: './src/index.js',

  output: {
    path: PATHS.build,
    filename: PROD ? 'bundle.min.js' : 'bundle.js',
    publicPath: PATHS.build
  },

  module: {
    loaders: [
      {
        test: /\.js?x?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      },

      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?name=/fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?name=./assets/thumbnails/[name].[ext]',
       }
    ]
  },

  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: { 
        warnings: false,
        drop_console: true
      },
      mangle: {
        except: ['$'],
        screw_ie8: true,
        keep_fnames: false
      }
    })
  ] : []
 };

