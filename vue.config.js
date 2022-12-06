const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '^/api/menu': {

        target: "https://tools.wellcommerce.com.br/teste/menu.json",
        changeOrigin: true
      },
    }
  }
})
