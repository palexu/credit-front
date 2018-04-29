<template>
  <!-- Featured Jobs Section -->
  <div class="section featured-jobs-section">

    <div class="inner" style="padding-top: 40px;padding-bottom: 40px">
      <div class="container">

        <div class="section-top-content flex items-center">
          <h1>{{reportName}}</h1>
          <span>信用报告</span>
          <!--<a href="#0">View all jobs<i class="ion-ios-arrow-thin-right"></i></a>-->
        </div> <!-- end .section-top-content -->

        <div class="jobs-table">

          <div class="table-header">
            <div class="table-cells flex">
              <div class="job-title-cell"><h6>指标</h6></div>
              <div class="job-type-cell"><h6>类型</h6></div>
              <div class="location-cell"><h6>状态</h6></div>
              <div class="expired-date-cell"><h6>更新时间</h6></div>
              <div class="salary-cell"><h6>查看详情</h6></div>
            </div> <!-- end .table-cells -->
          </div> <!-- end .table-header -->

          {{factors}}
          <report-factor v-for="factor in factors" :factor="factor"></report-factor>

        </div> <!-- end .jobs-table -->
      </div> <!-- end .container -->
    </div> <!-- end .inner -->
  </div> <!-- end .section -->
</template>

<script>
  import ReportFactor from "./ReportFactor";

  export default {
    components: {ReportFactor},
    name: "reportContent",
    props: [
      'reportName',
      'factors'
    ]
  }
</script>

<style scoped>

</style>
