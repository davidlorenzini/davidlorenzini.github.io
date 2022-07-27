const path = require("path")
const { InjectManifest } = require('workbox-webpack-plugin')

require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "public/dist")
    },
    devServer: {
        static:{
            directory: path.join(__dirname, "public")
        },
        port: 9000
    },
    plugins: [
        new InjectManifest({
            swSrc: "./src/sw.js",
            swDest: "sw.js",
            additionalManifestEntries: [
                "public/dist/main.js",
                "public/images/icons/192.png",
                "public/images/icons/512.png",
                "public/index.html"
            ]
          }),
    ]
}