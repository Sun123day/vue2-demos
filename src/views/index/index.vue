<template>
  <div>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-container>
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

}
</style>