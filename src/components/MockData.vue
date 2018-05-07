<template>
  <div>

    <credit-header></credit-header>

    <div class="container" style="margin-top: 100px">
      <div class="row">
        <div class="panel panel-primary col-md-12">
          <div class="panel-heading">
            <h3 class="panel-title">模拟数据</h3></div>
          <ul class="list-group">
            <a class="list-group-item" href="/api/mock/all">模拟所有</a>
            <a class="list-group-item" href="/api/mock/shardBike">shardBike</a>
            <a class="list-group-item" href="/api/mock/creditCard">mock creditCard</a>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="panel panel-warning col-md-12">
          <!-- Default panel contents -->
          <div class="panel-heading">清理数据</div>
          <ul class="list-group">
            <a class="list-group-item" href="/api/mock/cleanAll">删除所有模拟数据</a>
            <!--<a class="list-group-item" href="/api/mock/clean/shardBike">shardBike</a>-->
            <!--<a class="list-group-item" href="/api/mock/clean/creditCard">creditCard</a>-->
          </ul>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import CreditHeader from "./CreditHeader";

  export default {
    components: {CreditHeader},
    name: "mock-data"
  }
</script>

<style scoped>

</style>
