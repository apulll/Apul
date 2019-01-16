var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: ["./app.js"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "./",
    // publicPath: "./public/resource",
    filename: "bundle.js",
    chunkFilename: "[id].chunk.js"
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader", "postcss-loader"]
        })
      },
      { test: /\.(jsx?)$/, exclude: /node_modules/, loader: "babel-loader" },
      //{ test: /\.(gif|jpg|png|svg|woff|eot|ttf|otf)\??.*$/, loader: "url-loader?limit=10240&name=public/resource/images/index/[name].[ext]"}
      {
        test: /\.(gif|jpg|png|svg|woff|eot|ttf|otf)\??.*$/,
        loader: "url-loader?limit=10240&name=resource/images/index/[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".less"],
    // modules: ["./engine", "node_modules"],
    alias: {
      static: path.resolve(__dirname, "resource/")
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: false,
      allChunks: true
    })
  ]
};