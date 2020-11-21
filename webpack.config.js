var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,  // Path to entry point
  output: {
    filename: 'bundle.js',        // Name of output bundle file
    path: DIST_DIR                // Directory to place output file
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  module : {                      // modular rules to follow when transpiling files
    rules : [                   // list of different file formats and rules for each set
      {                           // describes a file type and which modules to use to interpret them
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ]
  }
};
