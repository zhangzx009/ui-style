const path = require("path");

let pageConfig = {
    index: {
        // page 的入口
        entry: "./template/index.js",
        title: 'Api Doc Page',
        filename: 'index.html',
        template: './assets/index.html'
    }
}
let devServerConfig = {
    port: process.env.VUE_APP_PORT,
    // proxy: {
    //     '/style/': {
    //         target: 'http://localhost:8989',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/style': ''
    //         }
    //     }
    // },
}
module.exports = {
    assetsDir: 'assets',
    pages: pageConfig,
    devServer: devServerConfig,
    configureWebpack: {
        resolve: {
            alias: {
                "@scss": path.resolve(__dirname, 'scss'),
                "@template": path.resolve(__dirname, 'template'),
                "@components": path.resolve(__dirname, 'template/views/Documentation/Components'),
                "@elements": path.resolve(__dirname, 'template/views/Documentation/Elements'),
            }
        }
    },
    chainWebpack: config => {
        config
            .module
            .rule("file")
            .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/,)
            .use("url-loader")
            .loader("url-loader")
            .options({
                limit: 10000,
                name: 'assets/fonts/[name].[ext]'
            })
            .end();
    }
}
