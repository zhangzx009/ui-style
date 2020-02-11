const path = require("path");

let pageConfig = {
    index: {
        // page 的入口
        entry: "./src/main.js"
    }
}
let devServerConfig = {
    port: process.env.VUE_APP_PORT,
    // proxy: {
    //     '/style/': {
    //         target: 'http://localhost:8989/about',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/style': ''
    //         }
    //     }
    //},
}
module.exports = {
    assetsDir: 'assets',
    pages: pageConfig,
    devServer: devServerConfig,
    configureWebpack: {
        resolve: {
            alias: {
                // "@sass": path.resolve(__dirname, 'cm-style/sass'),
                // "@template": path.resolve(__dirname, 'cm-style/template'),
            }
        }
    }
}
