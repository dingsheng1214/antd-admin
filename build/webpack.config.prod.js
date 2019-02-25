const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const cdnConfig = require('./qiNiu.config').cdn

const config = merge(common, {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../client/app.js'),
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'redux-react',
      'axios',
      'query-string'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: cdnConfig.host, // 让 打包生成的静态文件 前缀为 七牛CDN的域名
    path: path.join(__dirname, '../dist')
  },
  optimization: {
    minimize: true, // 压缩js
    runtimeChunk: { // 提取webpack运行时文件
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  performance: {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: 'warning',
    // 开发环境设置较大防止警告
    // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
    maxEntrypointSize: 5000000,
    // 最大单个资源体积，默认250000 (bytes)
    maxAssetSize: 3000000
  }
})

module.exports = config
