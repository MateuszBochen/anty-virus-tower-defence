var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: "./scripts/main.js",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: "style!css!resolve-url" },
            { test: /\.scss$/, loader: "style!css!sass!resolve-url!sass?sourceMap" },
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    stats: {
        colors: true,
        reasons: true
    },
    debug: true,
    devtool: 'source-map',
    devServer:{
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        })
    ]
};
