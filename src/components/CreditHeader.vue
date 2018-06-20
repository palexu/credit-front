<template>
  <div>

    <header class="header">
      <div class="container clearfix">
        <div class="header-inner flex space-between items-center">
          <div class="left">
            <div class="logo"><a href="/"><p>征信开放平台</p></a></div>
          </div> <!-- end .left -->
          <div class="right flex space-between no-column items-center">
            <div class="navigation">
              <nav class="main-nav">
                <ul class="list-unstyled">
                  <li><a href="/">首页</a></li>
                  <li><a href="/org">机构</a></li>
                  <!--<li><a href="/mock">mock数据</a></li>-->
                </ul>
              </nav> <!-- end .main-nav -->
              <a href="" class="responsive-menu-open"><i class="ion-navicon"></i></a>
            </div> <!-- end .navigation -->
            <div class="button-group-merged flex no-column">
              <!--<a href="/org" class="button">机构</a>-->

              <a v-if="!isLogin" href="#register" class="button" data-toggle="modal"
                 data-target=".bs-modal-sm">登陆</a>
              <div v-if="isLogin" class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                  {{getUser().username}} <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="#"></a></li>
                  <!--<li><a href="#">查看资料</a></li>-->
                  <!--<li role="separator" class="divider"></li>-->
                  <li><a v-on:click="logout">退出登录</a></li>
                </ul>
              </div>

            </div> <!-- end .button-group-merged -->
          </div> <!-- end .right -->
        </div> <!-- end .header-inner -->
      </div> <!-- end .container -->
    </header> <!-- end .header -->

    <!-- Responsive Menu -->
    <div class="responsive-menu">
      <a href="" class="responsive-menu-close"><i class="ion-android-close"></i></a>
      <nav class="responsive-nav"></nav> <!-- end .responsive-nav -->
    </div> <!-- end .responsive-menu -->

    <!--个人 登陆注册表单-->
    <!-- Login/Signup Popup -->
    <div v-show="isShowModal" class="modal bs-modal-sm" aria-hidden="true" aria-labelledby="myTabContent"
         id="login-signup-popup"
         role="dialog" tabindex="-1">
      <div class="modal-dialog modal-sm login-signup-modal">
        <div class="modal-content">
          <div class="popup-tabs">
            <ul class="nav nav-tabs" id="myTab">
              <li class="active"><a data-toggle="tab" href="#login">登陆</a></li>
              <li class=""><a data-toggle="tab" href="#register">注册</a></li>
            </ul>
          </div> <!-- end .popup-tabs -->
          <div class="modal-body">
            <div class="tab-content" id="myTabContent">

              <div class="tab-pane fade active in" id="login">
                <login-form v-on:user:login="finishLogin"></login-form>
              </div> <!-- end login-tab-content -->

              <div class="tab-pane fade " id="register">
                <register></register>
              </div> <!-- end signup-tab-content -->

            </div> <!-- end .mytabcontent -->
          </div> <!-- end .modal-body -->
        </div> <!-- end .modal-content -->
      </div> <!-- end .modal-dialog -->
    </div> <!-- end .modal -->

  </div>
</template>

<script>
  import axios from "axios";
  import Register from "./Register";
  import LoginForm from "./LoginForm";

  export default {
    components: {
      LoginForm,
      Register
    },
    name: "credit-header",
    data() {
      return {
        userString: "",
        isLogin: false,
        isShowModal: false
      }
    },
    mounted: function () {
      this.checkLogin();
    },
    methods: {
      finishLogin: function () {
        this.checkLogin();
        location.reload();
      },
      checkLogin: function () {
        var ss = window.sessionStorage;
        var user = ss.getItem("user");
        if (null == user) {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }
      },
      logout: function () {
        window.sessionStorage.removeItem("user");
        this.isLogin = false;
        axios.get("/api/user/logout").then(response => {
          var res = response.data;
        })
      },
      getUser: function () {
        var ss = window.sessionStorage;
        var user = ss.getItem("user");
        if (user == null) {
          return {}
        }
        return JSON.parse(user);
      }
    },
    computed: {}
  }
</script>

<style scoped>

</style>
