const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
  // 解析
  resolve: {
    extensions: ['.js', '.jsx'] // 自动解析确定的扩展
  },
  module: {
    rules: [
      { // 将jsx转换成 js
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      { // 将ES6语法转成 低版本语法
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [// 排除node_modules 下的js
          path.join(__dirname, '../node_modules')
        ]
      },
      { // 处理图片
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              options: {
                limit: 8192
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader' // 将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // 将 JS 字符串生成为 style 节点
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}

module.exports = commonConfig
