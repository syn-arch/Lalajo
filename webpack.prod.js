const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
        /* babel loader */
        {
            test: /\.js$/,
            exclude: "/node_modules/",
            use: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
            ]
        }
        ]
    },
    plugins : [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/detail.html",
        filename: "detail.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/detail_tv.html",
        filename: "detail_tv.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/movies.html",
        filename: "movies.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/search.html",
        filename: "search.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/tv-series.html",
        filename: "tv-series.html"
    })
    ]
})