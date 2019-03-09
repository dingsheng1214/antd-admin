const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const cdnConfig = require('./qiNiu.config').cdn
// 拆分出 css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩拆分出 的 css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 启用css压缩后， 导致默认的webpack配置失效， js无法压缩, 需使用 uglifyjs-webpack-plugin 压缩 js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 开启 gzip
// const CompressionWebpackPlugin = require('compression-webpack-plugin');

const config = merge(common, {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../client/app.js'),
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'react-loadable',
      'prop-types',
      'axios',
      'antd',
      '@antv/data-set',
      'bizcharts'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: cdnConfig.host, // 让 打包生成的静态文件 前缀为 七牛CDN的域名
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS 放在最后的 loader 首先被执行
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
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
    },
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({
        // 压缩 js
        uglifyOptions: {
          ecma: 6,
          cache: true,
          parallel: true
        }
      })
    ]
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
