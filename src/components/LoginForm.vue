<template>
  <form class="login-form" method="post">

    <div class="form-group">
      <label>账号 *</label>
      <input type="text" name="username" class="form-control"
             v-model="form.username"
             v-on:click="clearTip"
             placeholder="身份证 或 统一社会信用代码">
    </div>

    <div class="form-group">
      <label>密码 *</label>
      <input type="password" name="password" class="form-control"
             v-model="form.password"
             v-on:click="clearTip"
             placeholder="输入你的密码">
    </div>
    <p v-if="tip.length>0" class="alert alert-danger">{{tip}}</p>

    <button v-on:click="login" class="button">登陆</button>

  </form> <!-- end .login-form -->
</template>

<script>
  import axios from "axios";

  export default {
    name: "login-form",
    data() {
      return {
        form: {
          username: null,
          password: null
        },
        tip: ''
      }
    },
    methods: {
      login: function (e) {
        e.preventDefault();
        if (this.form.username == null || this.form.password == null) {
          alert("用户名或密码为空")
        }
        axios.post("/api/user/login", this.form).then(response => {
          if (response.data.success) {
            window.sessionStorage.setItem("user", JSON.stringify(response.data.data));
            this.$emit("user:login");
          } else {
            this.tip = response.data.msg;
          }
        })
      },
      clearTip: function () {
        this.tip = '';
      }
    }
  }
</script>

<style scoped>

</style>
