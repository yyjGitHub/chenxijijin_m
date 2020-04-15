// vue.config.js
// const path = require("path");
const webpack = require("webpack");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["./src/styles/fun.scss"],
    },
  },
  lintOnSave: false,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    //引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
  },
};
