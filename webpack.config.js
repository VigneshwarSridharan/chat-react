const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    home: './src/index.js',
  },
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          }, {
            loader: 'postcss-loader',
          }],
        }),
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
          'resolve-url-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /(node_modules)/,
        use: ['file-loader'],
      }
    ]
  },
  // plugins: [htmlWebpackPlugin]
};
