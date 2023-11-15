const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.json$/,
        type: 'asset/resource',
        include: path.resolve(__dirname, 'src/json'), // Adjust the path as needed
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'json',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3|ogg|wav)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/i,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: 'images', // or any other desired output path
      //     },
      //   },
      // },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // Output CSS filename
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'), // Path to your template
      filename: 'index.html', // Output filename in dist
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images', // Source directory (adjust the path as needed)
          to: 'images', // Destination directory in 'dist'
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      // Use TerserPlugin for JavaScript minification
      new TerserPlugin({
        // Terser options
        test: /\.js(\?.*)?$/i,
      }),
    ],
    minimize: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true, // Automatically open the default web browser
    // hot: true,
  },
};
