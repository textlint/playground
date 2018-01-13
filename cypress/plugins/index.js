const wp = require("@cypress/webpack-preprocessor");

const webpackOptions = {
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [{ test: /-(test|spec)\.js$/, loader: "webpack-espower-loader" }]
    }
};

module.exports = on => {
    const options = {
        webpackOptions
    };
    on("file:preprocessor", wp(options));
};
