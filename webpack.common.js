const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.(sass|scss|css)$/,
            use: ['style-loader','css-loader','sass-loader']
        },
        {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: ['file-loader']
        }
        ]
    },
    plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
    ],
}