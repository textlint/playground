const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
module.exports = {
    node: {
        fs: "empty",
        module: "empty"
    },
    entry: {
        build: "./src/index.js"
    },
    mode: process.env.NODE_ENV !== "production" ? "development" : "production",
    output: {
        path: path.join(__dirname, "public", "build"),
        publicPath: "/build/",
        filename: "bundle.js"
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
    ]
};
