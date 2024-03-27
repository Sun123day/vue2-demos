<template>
  <div class="form">
    <el-form 
      status-icon 
      :rules="rules" 
      ref="ruleForm" >
      <el-form-item label="用户名" prop="userName">
        <el-input 
          type="text" 
          v-model="userName" 
          autocomplete="off"
          style="width: 100%;"
          clearable
        />
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input 
          type="password" 
          v-model="passWord" 
          autocomplete="off"
          style="width: 100%;"
          clearable
        />
      </el-form-item>
      <el-form-item style="display: flex; justify-content: space-between;">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/utils/login'
export default {
  data() {
    return {
      userName:'',
      passWord: '',
      rules: {

      }
    };
  },
  methods: {
    submitForm() {
      login({
        //设置传参，后端此时需要的参数为username、password
        username: this.userName,
        password: this.passWord,
      }).then(res => {
        console.log(res, "before");//看获取到的res的数据结构，根据其中的code判断是否成功
        if(res.data.code == 200) {
          // console.log(res.data.data, "after"); //打印其中的数据结构看获取到的data
          this.$router.push({
            path: '/',
            name: 'index'
          })
        }
      }).catch(err => {
        alert(err)
      })
    },
    resetForm() {
      this.userName = ''
      this.passWord = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  height: 300px;
  width: 400px; 
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>