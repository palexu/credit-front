<template>
  <form class="signup-form" method="get" action="/api/user/register">
    <div class="form-group">
      <label>账号 *</label>
      <input type="text" name="username" class="form-control" v-model="form.username" placeholder="输入身份证或统一社会信用代码">
    </div>

    <div class="form-group">
      <label>密码 *</label>
      <input type="password" name="password" class="form-control" v-model="form.password" placeholder="输入密码">
    </div>

    <div class="form-group">
      <label>身份:</label>
      <div class="select-wrapper">
        <select class="form-control" v-model="form.role" name="role">
          <option value="1">个人</option>
          <option value="2">机构</option>
        </select>
      </div> <!-- end .select-wrapper -->
    </div>
    <button v-on:click="register" class="button" data-dismiss="modal">注册</button>

  </form> <!-- end .signup-form -->
</template>

<script>
  import axios from "axios";

  export default {
    name: "register",
    data() {
      return {
        res: null,
        form: {
          username: "",
          password: "",
          role: ""
        }
      }
    },
    methods: {
      register: function (e) {
        e.preventDefault();
        if (this.form.username.length == 0 || this.form.password.length < 6 || this.form.role.length == 0) {
          alert("注册表单未正确填写");
          return;
        }
        axios.post("/api/user/register", this.form).then(response => {
          var res = response.data;
          if (res.success == true) {
            alert(res.msg)
          } else {
            alert(res.msg)
          }

        }).catch(e => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
