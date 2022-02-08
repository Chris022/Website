const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
    experiments: {
        topLevelAwait: true,
      },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ChrisisWorld',
            template: path.resolve(__dirname, './src/reactTemplate.html'), // template file
            filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/resources", to: "resources" },
              ],
        })
    ],
    module: {
        rules:[
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                    ],
                    plugins: [
                        '@babel/transform-runtime'
                    ]
                }
            },
            // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|obj|woff2)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
}