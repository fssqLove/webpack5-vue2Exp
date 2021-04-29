const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/i,
        // 处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
        loader: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[hash][ext][query]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.vue', '.tsx', '.ts', '.js'],
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
  },
};
