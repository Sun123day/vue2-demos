<template>
<div class="header">
  <h1>项目名字</h1>
  <el-button type="text" @click="handleExit" style="color: #fff;">点击退出</el-button>
</div>
</template>
<script>
export default {
  methods: {
    handleExit(){
      this.$router.push({
        path: '/login',
        name: 'login'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 60px;
}
</style>