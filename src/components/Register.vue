<template>
  <form class="signup-form" method="get" action="/api/user/register">
    <div class="form-group">
      <label>账号 *</label>
      <input type="text" name="username" class="form-control" id="InputEmail2" placeholder="输入身份证或统一社会信用代码">
    </div>

    <div class="form-group">
      <label>密码 *</label>
      <input type="password" name="password" class="form-control" id="InputPassword2" placeholder="输入密码">
    </div>

    <!--<div class="form-group">-->
    <!--<label for="InputPassword2">确认密码 *</label>-->
    <!--<input type="password" class="form-control" id="InputPassword3" placeholder="再次输入密码">-->
    <!--</div>-->

    <div class="form-group">
      <label for="select1">身份:</label>
      <div class="select-wrapper">
        <select class="form-control" id="select1" name="role">
          <option>个人</option>
          <option>机构</option>
        </select>
      </div> <!-- end .select-wrapper -->
    </div>

    <button type="submit" class="button" >注册</button>

  </form> <!-- end .signup-form -->
</template>

<script>
    export default {
        name: "register",
      methods:{
          register:function () {
            return null;
          }
      }
    }
</script>

<style scoped>

</style>
