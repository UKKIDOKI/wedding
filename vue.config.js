module.exports = {
  outputDir: './docs',
  publicPath: '/UKKIDOKI.github.io/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_var.scss";`,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
  },
};
