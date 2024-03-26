const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

})
// module.exports = {
//   lintOnSave: false,
//   devServer: {
//     proxy: {
//       '^/api/.*': {
//         target: 'http://192.168.0.109:9801',  // 设置后端接口的访问地址
//         changeOrigin: true,
//         pathRewrite: {
//           // '^/api': ''  // 将请求路径中的 '/api' 替换为空字符串
//           rewrite: (path) => path.replace(/^\/api/, '/api'),
//         }
//       }
//     }
//   }
// }
