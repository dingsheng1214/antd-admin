const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, '../client/app.js')
  ],
  output: {
    filename: '[name].[hash].js',
    publicPath: '/public/',
    path: path.join(__dirname, '../dist')
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8887',
    contentBase: path.join(__dirname, '../views'), // 告诉服务器从哪个目录中提供内容
    hot: true, // 启用 webpack 的模块热替换特性
    overlay: {// 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    publicPath: '/public/', // webpack-dev-server打包的内容是放在内存中的，这些打包后的资源对外的的根目录就是publicPath，换句话说，这里我们设置的是打包后资源存放的位置
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: { // client端 port为 8887， server端接口为 3333， 所以我们这里要设置 proxy代理
      '/api': 'http://localhost:8888'
    }
  },
  module: {
    rules: [
      {
        // 前置(在执行编译之前去执行eslint-loader检查代码规范，有报错就不执行编译)
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config
