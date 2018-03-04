let webpack = require("webpack");
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackDevServer = require('webpack-dev-server');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: {
    index:[
        path.join(__dirname,'../src/public/scripts/index.es'),
        path.join(__dirname,'../src/public/scripts/indexadd.js')
    ],
    tag:[
     path.join(__dirname,'../src/public/scripts/tag.es')
    ]
  },
  output: {
    path: path.join(__dirname, '../build/'),
    filename: 'public/scripts/[name]-[hash:5].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "../build/"),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:3000
  },
   module: {
    rules: [
      {
        test: /\.es$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins:[
   new webpack.DefinePlugin({
         'process.env':{
            NODE_ENV:'"dev"'
          }
   }),
   new LiveReloadPlugin({appendScriptTag: true}),
   new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
   new webpack.optimize.CommonsChunkPlugin({
    name:'vendor',
    filename:'public/scripts/common/vendor-[hash:5].min.js',
   }),
  new HtmlWebpackPlugin({
        filename:"./views/layout.html",
        template: "src/widget/layout.html",
        inject:false
    }),
    new HtmlWebpackPlugin({
        filename:"./views/index.html",
        template: "src/views/index.js",
        chunks:['vendor','index','tag'],
        inject:false
    }),
     new HtmlWebpackPlugin({
        filename:"./widget/index.html",
        template: "src/widget/index.html",
        inject:false
    }),
   new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
  })
]

}
