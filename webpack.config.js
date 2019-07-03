const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: './dist',
//     filename: '[name].js',
//     sourceMapFilename: "[name].js.map",
//     library: 'DS',
//     libraryTarget: 'umd'
//   },
// }

const APP_DIR = path.resolve(__dirname, './src');

module.exports = env => {
  return merge([
    {
      mode: 'development',
      entry: [ '@babel/polyfill', APP_DIR ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      output: {
        library: 'DS',
        libraryTarget: 'umd',
        chunkFilename: '[name].bundle.js'
      }
    }
  ])
}

// module.exports = env => {
//   return merge([
//     {
//       mode: 'development',
//       entry: [ APP_DIR ],
//       // module: {
//       //   rules: [
//       //     {
//       //       test: /\.js$/,
//       //       exclude: /node_modules/,
//       //       use: {
//       //         loader: 'babel-loader'
//       //       }
//       //     }
//       //   ]
//       // },
//       output: {
//         library: 'DS',
//         libraryTarget: 'umd',
//         chunkFilename: '[name].bundle.js'
//       }
//     }
//   ])
// }