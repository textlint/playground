const path = require("path");
const webpack = require("webpack");
module.exports = {
    node: {
        fs: "empty",
        module: "empty"
    },
    entry: {
        'build': './src/index.js'
    },
    output: {
        path: __dirname + "/bundle",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};