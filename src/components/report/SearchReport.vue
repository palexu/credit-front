<template>
  <!-- Hero Section -->
  <div class="section hero-section transparent" style="background-image: url('static/images/background01.jpg');">
    <div class="inner">

      <div class="container">
        <div class="job-search-form">

          <h2>超过<span>100,000<sup>+</sup></span>征信数据</h2>

          <form class="form-inline flex">
            <div class="form-group">
              <div class="form-group-inner">
                <input type="text" class="form-control" id="input-field-1"
                       placeholder="输入你的身份证号" v-model="searchContent">
                <i class="ion-ios-briefcase-outline"></i>
              </div>
            </div>
            <button type="submit" class="button" v-on:click="searchReport"><i
              class="ion-ios-search-strong"></i>
            </button>
          </form>

        </div> <!-- end .job-search-form -->
      </div> <!-- end .container -->

      <div class="features-bar">
        <div class="container">
          <div class="features-bar-inner flex space-between">
            <div class="features-box self-center">
              <h3>基于区块链的征信平台</h3>
              <a href="/">了解区块链技术<i class="ion-ios-arrow-thin-right"></i></a>
            </div> <!-- end .feature-box -->
            <div class="features-box-icon flex no-wrap">
              <img src="static/images/feature-icon01.png" alt="cup-icon" class="img-responsive self-center">
              <div class="content self-center">
                <h3>多重加密保障安全</h3>
                <a href="/">了解更多<i class="ion-ios-arrow-thin-right"></i></a>
              </div> <!-- end .content -->
            </div> <!-- end .feature-box-icon -->
            <div class="features-box-icon flex no-wrap">
              <img src="static/images/feature-icon02.png" alt="cup-icon" class="img-responsive self-center">
              <div class="content self-center">
                <h3>2,500,000+ 征信数据</h3>
                <a href="/">加入我们<i class="ion-ios-arrow-thin-right"></i></a>
              </div> <!-- end .content -->
            </div> <!-- end .feature-box-icon -->
            <div class="user-profile-icon self-center">
              <img src="static/images/profile-icon01.png" alt="profile-icon" class="img-responsive self-center">
            </div> <!-- end .profile-icon -->
          </div> <!-- end .features-bar-inner -->
        </div> <!-- end .container -->
      </div> <!-- end .features-bar -->

    </div> <!-- end .inner -->
  </div> <!-- end .section -->
</template>

<script>
  import axios from "axios";

  export default {
    name: "search-report",
    data() {
      return {
        searchContent: ""
      }
    },
    methods: {
      searchReport: function (e) {
        e.preventDefault();
        if (!this.check()) {
          return;
        }

        axios.get('/api/report/search/' + this.searchContent).then(res => {
          console.log(res.data);

          try {
            if (res.data.indexOf("error:") > -1) {
              alert(res.data.replace("error:", ""));
              return;
            }
          } catch (e) {
            console.log(e.message);
          }

          this.$emit("search:report", res.data)
        }).catch(excption => {
          console.log(excption)
        });
      },
      check: function () {
        let id_reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        if (id_reg.test(this.searchContent) === false) {
          alert("身份证输入不合法");
          return false;
        }
        return true;
      }
    }
  }
</script>

<style scoped>

</style>
