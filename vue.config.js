// vue.config.js
// const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["./src/styles/fun.scss"]
    }
  },
  lintOnSave: false,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static"
};
