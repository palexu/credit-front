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
                       placeholder="输入你的身份证号或统一社会信用代码" v-model="searchContent">
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
              <h3>Leading the industry</h3>
              <a href="about.html">About us<i class="ion-ios-arrow-thin-right"></i></a>
            </div> <!-- end .feature-box -->
            <div class="features-box-icon flex no-wrap">
              <img src="static/images/feature-icon01.png" alt="cup-icon" class="img-responsive self-center">
              <div class="content self-center">
                <h3>High average salary</h3>
                <a href="#0">Learn more<i class="ion-ios-arrow-thin-right"></i></a>
              </div> <!-- end .content -->
            </div> <!-- end .feature-box-icon -->
            <div class="features-box-icon flex no-wrap">
              <img src="static/images/feature-icon02.png" alt="cup-icon" class="img-responsive self-center">
              <div class="content self-center">
                <h3>2,500,000+ candidates</h3>
                <a href="#0">Our community<i class="ion-ios-arrow-thin-right"></i></a>
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
        searchContent: null
      }
    },
    methods: {
      searchReport: function () {
        console.log(this.searchContent);
        axios.get('/api/report/search/TEST01').then(res => {
          console.log(res.data);
          this.$emit("search:report", res.data)
        }).catch(excption => {
          console.log(excption)
        });
      }
    }
  }
</script>

<style scoped>

</style>
