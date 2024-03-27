const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

})
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      //全局替换路径字符串
      '^/smart/.*': {
        target: 'http://192.168.0.109:81',  // 设置后端接口的访问地址 ==> http://ip:端口
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''  // 将请求路径中的 '/api' 替换为空字符串
          rewrite: (path) => path.replace(/^\/smart/, '/smart'),
        }
      }
    }
  }
}
