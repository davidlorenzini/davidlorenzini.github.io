const path = require("path")
const { InjectManifest } = require('workbox-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "dist")
    },
    devServer: {
        static:{
            directory: path.join(__dirname, "dist")
        },
        historyApiFallback: true,
        port: 9000
    },
    plugins: [
        new InjectManifest({
            swSrc: "./src/serviceWorker/sw.js",
            swDest: "sw.js",
        }),
        new CopyPlugin({
            patterns: [
                { context: "static", from: "**/*", to: "./" },
            ],
        }),
    ]
}