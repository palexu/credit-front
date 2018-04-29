<template>
  <div class="table-row">
    <div class="table-cells flex no-wrap">

      <div class="cell job-title-cell flex no-column no-wrap">
        <div class="cell-mobile-label">
          <h6>因子名</h6>
        </div> <!-- end .cell-label -->
        <img src="static/images/company-logo01.jpg" alt="company-logo" class="img-responsive">
        <div class="content">
          <h4><a href="#">{{factor.factorName}}</a></h4>
          <p class="small">{{factor.desc}}</p>
        </div> <!-- end .content -->
      </div> <!-- end .job-title-cell -->

      <div class="cell job-type-cell flex no-column">
        <div class="cell-mobile-label">
          <h6>描述</h6>
        </div> <!-- end .cell-label -->
        <button type="button" class="button full-time">{{factor.type}}</button>
      </div> <!-- end .job-type-cell -->

      <div class="cell location-cell flex no-column no-wrap">
        <div class="cell-mobile-label">
          <h6>状态</h6>
        </div> <!-- end .cell-label -->
        <p>{{factor.value}}</p>
      </div> <!-- end .location-cell -->

      <div class="cell expired-date-cell flex no-column no-wrap">
        <div class="cell-mobile-label">
          <h6>更新时间</h6>
        </div> <!-- end .cell-label -->
        <p>{{factor.gmtCreated}}</p>
      </div> <!-- end .expire-date-cell -->

      <div class="cell salary-cell flex no-column no-wrap">
        <div class="cell-mobile-label">
          <h6>详情</h6>
        </div> <!-- end .cell-label -->
        <!--<p><sup>$</sup>60<span>/hour</span></p>-->
        <a href="#">点击查看</a>
      </div> <!-- end .salray-cell -->

    </div> <!-- end .table-cells -->
  </div> <!-- end .table-row -->
</template>

<script>
  export default {
    name: "report-factor",
    props: [
      'factor'
    ]
    // ,
    // data() {
    //   return {
    //     factorName: "tst",
    //     desc: "描述",
    //     type: "维度",
    //     value: "因子值",
    //     gmtCreated: "yyyy-MM-dd"
    //   }
    // }
  }
</script>

<style scoped>

</style>
