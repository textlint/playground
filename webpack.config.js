const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    node: {
        fs: "empty",
        module: "empty"
    },
    entry: {
        build: "./src/index.js"
    },
    mode: process.env.NODE_ENV !== "production" ? "development" : "production",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "public", "build"),
        // production use relative path
        publicPath: process.env.NODE_ENV !== "production" ? "/build/" : "build/",
        chunkFilename: "[name].bundle.js",
        filename: "[name].bundle.js"
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    // FIXME: https://github.com/webpack/webpack/issues/6760
                    compress: {
                        inline: 1
                    },
                    ecma: 5,
                    mangle: true
                },
                sourceMap: true,
                exclude: [/node_modules/]
            })
        ]
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
        // new BundleAnalyzerPlugin()
    ]
};
