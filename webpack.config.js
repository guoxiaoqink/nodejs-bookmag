//使用方式
//webpack {entry file/入口文件} {destination for bundled file/存放bundle.js的地方}
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry:__dirname +"/app/main.js",
  output:{
    path:__dirname +"/build",        //__dirname 是node.jsde 全局变量，指向当前脚本所在的目录
    filename:'bundle.js'
  },
  module: {
  loaders: [
    {
      test: /\.json$/,
      loader: "json-loader"
    },
    {
      test:/\.js$/,
      exclude:/node_modules/,
      loader:'babel-loader',//在webpack的module部分的loaders里面进行配置就行。

    },
    {
        test: /\.css$/,
        loader: 'style!css'//添加对样式表的处理
      }
  ]
},
plugins:[
  new HtmlWebpackPlugin({
    template: __dirname + "/app/index.html"
  }),
  new webpack.HotModuleReplacementPlugin()//热加载插件
],
  devServer:{
    contentBase:"./public",//本地服务器所加载的页面所在目录
    color:true,//总端输出结果为彩色
    historyApiFallback:true,//不调转
    inline:true//时时刷新
  }
}
