module.exports = {
    node: {
        fs: "empty",
        module: "empty"
    },
    entry: {
        'build': './src/index.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: "json"},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    "presets": ["es2015"],
                    "plugins": [
                        ["transform-react-jsx", {"pragma": "element"}]
                    ]
                }
            }
        ]
    }
};