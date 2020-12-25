const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isEnvDevelopment = process.env.NODE_ENV === 'development'
const isEnvProdcution = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isEnvDevelopment ? 'development' : 'production',
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@/pages': path.join(__dirname, 'src/pages'),
      '@/components': path.join(__dirname, 'src/components'),
      '@/images': path.join(__dirname, 'src/images'),
    },
  },
  module: {
    rules: [
      isEnvDevelopment && {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isEnvProdcution && MiniCssExtractPlugin.loader,
          isEnvDevelopment && 'style-loader',
          'css-loader',
          'sass-loader',
        ].filter(Boolean),
      },
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `images/[name].[contenthash:8].[ext]`,
              esModule: false,
            },
          },
        ],
      },
    ].filter(Boolean),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    isEnvDevelopment && new CleanWebpackPlugin(),
    isEnvProdcution &&
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
      }),
    isEnvDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /@license/i,
          },
        },
        extractComments: false,
      }),
    ],
  },
  devServer: {
    writeToDisk: true,
    hot: true,
    historyApiFallback: true,
  },
}
