var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: ["./app.js"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "./",
    // publicPath: "./public/resource",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  module: {
    rules: [
      {
       test: /\.(jsx?)$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader'
       }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              // name: '[path][name].[ext]',
              outputPath:'assets/images',
            }
          }
        ]
      },
      {
        test: /\.(woff|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name: '[path][name].[ext]',
              outputPath:'assets/fonts',
            }
          }
        ]
      },
      
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".less"],
    modules: ["app", "node_modules"],
    alias: {
      static: path.resolve(__dirname, "app/assets")
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: false,
      allChunks: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        },
      }
    }
  }
};