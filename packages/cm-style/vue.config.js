const path = require("path");

let pagConfg = {
    index: {
        // page 的入口
        entry: "./template/index.js"
    }
}
let devServerConfig = {
    port: process.env.VUE_APP_PORT,
}
module.exports = {
    assetsDir: 'assets',
    pages: pagConfg,
    devServer: devServerConfig,
    configureWebpack: {
        resolve: {
            alias: {
                "@sass": path.resolve(__dirname, 'cm-style/sass'),
                "@template": path.resolve(__dirname, 'cm-style/template'),
            }
        }
    }
}
