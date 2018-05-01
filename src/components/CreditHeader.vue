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
                  <li><a href="/mock">mock数据</a></li>
                </ul>
              </nav> <!-- end .main-nav -->
              <a href="" class="responsive-menu-open"><i class="ion-navicon"></i></a>
            </div> <!-- end .navigation -->
            <div class="button-group-merged flex no-column">
              <!--<a href="/org" class="button">机构</a>-->
              <a href="#register" class="button" data-toggle="modal" data-target=".bs-modal-sm">登陆</a>
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
    <div class="modal fade bs-modal-sm" aria-hidden="true" aria-labelledby="myTabContent" id="login-signup-popup"
         role="dialog" tabindex="-1">
      <div class="modal-dialog modal-sm login-signup-modal">
        <div class="modal-content">
          <div class="popup-tabs">
            <ul class="nav nav-tabs" id="myTab">
              <li class=""><a data-toggle="tab" href="#login">登陆</a></li>
              <li class="active"><a data-toggle="tab" href="#register">注册</a></li>
            </ul>
          </div> <!-- end .popup-tabs -->
          <div class="modal-body">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade" id="login">
                <form class="login-form">

                  <div class="form-group">
                    <label for="InputEmail1">账号 *</label>
                    <input type="email" class="form-control" id="InputEmail1" placeholder="身份证 或 统一社会信用代码">
                  </div>

                  <div class="form-group">
                    <label for="InputPassword1">密码 *</label>
                    <input type="password" class="form-control" id="InputPassword1" placeholder="输入你的密码">
                  </div>

                  <button type="button" class="button" data-dismiss="modal">登陆</button>

                </form> <!-- end .login-form -->
              </div> <!-- end login-tab-content -->

              <div class="tab-pane fade active in" id="register">
                <form class="signup-form">
                  <div class="form-group">
                    <label for="InputEmail1">账号 *</label>
                    <input type="email" class="form-control" id="InputEmail2" placeholder="输入身份证或统一社会信用代码">
                  </div>

                  <div class="form-group">
                    <label for="InputPassword1">密码 *</label>
                    <input type="password" class="form-control" id="InputPassword2" placeholder="输入密码">
                  </div>

                  <div class="form-group">
                    <label for="InputPassword2">确认密码 *</label>
                    <input type="password" class="form-control" id="InputPassword3" placeholder="再次输入密码">
                  </div>

                  <div class="form-group">
                    <label for="select1">身份:</label>
                    <div class="select-wrapper">
                      <select class="form-control" id="select1">
                        <option>个人</option>
                        <option>机构</option>
                      </select>
                    </div> <!-- end .select-wrapper -->
                  </div>

                  <button type="button" class="button" data-dismiss="modal">注册</button>

                </form> <!-- end .signup-form -->
              </div> <!-- end signup-tab-content -->
            </div> <!-- end .mytabcontent -->
          </div> <!-- end .modal-body -->
        </div> <!-- end .modal-content -->
      </div> <!-- end .modal-dialog -->
    </div> <!-- end .modal -->

  </div>
</template>

<script>
  export default {
    name: "credit-header"
  }
</script>

<style scoped>

</style>
