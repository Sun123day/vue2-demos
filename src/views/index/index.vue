<template>
  <div>
    <el-container>
        <el-header class="header">
          <Header />
        </el-header>

      <!-- <el-aside width="200px">
        <NavMenu />
      </el-aside> -->

      <el-container>
        <!-- <el-header class="header">
          <Header />
        </el-header> -->
        <el-aside width="200px">
          <NavMenu />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu/index.vue'
import Header from '@/components/Header/index.vue'
export default {
  components:{
    NavMenu,
    Header,
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
  width: 100%;
}
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px !important;
  /*外部间距也是如此设置*/
  margin: 0px !important;
  /*统一设置高度为100%*/
  height: 100vh;
}
.el-aside {
  background-color: #545c64;
  text-align: center;
  height: 100vh !important;
}
</style>