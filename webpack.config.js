const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: './dist.browser/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'file-replace-loader',
        options: {
          condition: 'always',
          replacement (resourcePath) {
            const mapping = {
              [resolve('./dist.browser/lib/logging.js')]: resolve(
                './browser/logging.js'
              ),
              [resolve('./dist.browser/lib/net/peer/libp2pnode.js')]: resolve(
                './browser/libp2pnode.js'
              )
            }
            return mapping[resourcePath]
          },
          async: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    library: 'ethereumjs'
  }
}
