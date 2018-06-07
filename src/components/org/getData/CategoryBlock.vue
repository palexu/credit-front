<template>
  <!-- Category Section -->
  <div class="section category-section solid-blue-bg">
    <div class="inner">
      <div class="container">
        <h1 class="light">获取不同场景的征信数据</h1>
        <div class="category-grid">
          <div class="category-row flex no-wrap space-between items-center">
            <div class="item" v-on:click="getProviderList('creditCard')">
              <img src="static/images/category-icon01.png" alt="category-icon" class="img-responsive">
              <h4>银行</h4>
              <p class="light">4286 Jobs</p>
            </div> <!-- end .item -->
            <div class="item">
              <img src="static/images/category-icon02.png" alt="category-icon" class="img-responsive">
              <h4>生活</h4>
              <p class="light">452 Jobs</p>
            </div> <!-- end .item -->
            <div class="item" v-on:click="getProviderList('sharedBike')">
              <img src="static/images/category-icon03.png" alt="category-icon" class="img-responsive">
              <h4>出行</h4>
              <p class="light">1867 Jobs</p>
            </div> <!-- end .item -->
            <div class="item">
              <img src="static/images/category-icon04.png" alt="category-icon" class="img-responsive">
              <h4>Art/Design</h4>
              <p class="light">3094 jobs</p>
            </div> <!-- end .item -->
            <div class="item">
              <img src="static/images/category-icon05.png" alt="category-icon" class="img-responsive">
              <h4>Sales/Marketing</h4>
              <p class="light">2955 jobs</p>
            </div> <!-- end .item -->
          </div> <!-- end .category-row -->

          <div class="category-row flex no-wrap space-between items-center">
            <div class="item">
              <img src="static/images/category-icon06.png" alt="category-icon" class="img-responsive">
              <h4>Science</h4>
              <p class="light">470 Jobs</p>
            </div> <!-- end .item -->
            <div class="item">
              <img src="static/images/category-icon07.png" alt="category-icon" class="img-responsive">
              <h4>Technologies</h4>
              <p class="light">4536 Jobs</p>
            </div> <!-- end .item -->
            <div class="item">
              <img src="static/images/category-icon08.png" alt="category-icon" class="img-responsive">
              <h4>Healthcare</h4>
              <p class="light">2619 Jobs</p>
            </div> <!-- end .item -->
            <!--<div class="item">-->
            <!--<img src="static/images/category-icon09.png" alt="category-icon" class="img-responsive">-->
            <!--<h4>Education/Training</h4>-->
            <!--<p class="light">1132 jobs</p>-->
            <!--</div> &lt;!&ndash; end .item &ndash;&gt;-->
            <!--<div class="item">-->
            <!--<img src="static/images/category-icon10.png" alt="category-icon" class="img-responsive">-->
            <!--<h4>Food Services</h4>-->
            <!--<p class="light">757 jobs</p>-->
            <!--</div> &lt;!&ndash; end .item &ndash;&gt;-->
          </div> <!-- end .category-row -->
        </div>  <!-- end .category-grid -->
      </div> <!-- end .container -->
    </div> <!-- end .inner -->
    <div class="background-text">
      <h1>Categories</h1>
    </div> <!-- end .background-text -->
  </div> <!-- end .section -->
</template>

<script>
  import axios from "axios";

  export default {
    name: "category-block",
    methods: {
      getProviderList: function (bizType) {
        // e.preventDefault();
        console.log(bizType);
        axios.get('/api/provider/list/' + bizType).then(res => {
          console.log(res.data);
          if(res.data.success){
            this.$emit("provider:list", res.data.data)
          }else{
            alert(res.data.msg)
          }

        }).catch(excption => {
          console.log(excption)
        });

      }
    }
  }
</script>

<style scoped>

</style>
