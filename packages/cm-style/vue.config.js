const path = require("path");

let pagConfg = {
    index: {
        // page 的入口
        entry: "./template/index.js"
    }
}
module.exports = {
    assetsDir: 'assets',
    pages: pagConfg,
    configureWebpack: {
        resolve: {
            alias: {
                "@sass": path.resolve(__dirname, 'cm-style/sass'),
                "@template":path.resolve(__dirname, 'cm-style/template'),
            }
        }
    }
}
