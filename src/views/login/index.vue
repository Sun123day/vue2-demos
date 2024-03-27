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
        username: this.userName,
        password: this.passWord,
      }).then(res => {
          console.log(res, 'before')
        if(res.data.code == 200) {
          // console.log(res, "&&&&&&&&&&&&&&");
          this.$router.push({
            path: '/',
            name: 'index'
          })
        }
      }).catch(err => {
        alert(err + "账号或密码有误，请重新输入！！！")
      })
      // if(this.userName === 'admin' && this.passWord === 'Admin123!') {
      //   this.$router.push({
      //     path: '/',
      //     name: 'index'
      //   })
      // } else {
      //   alert("账号或密码有误，请重新输入！！！")
      //   this.resetForm()
      // }
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