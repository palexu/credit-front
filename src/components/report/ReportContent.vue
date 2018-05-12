<template>
  <!-- Featured Jobs Section -->
  <div>
    <div class="section featured-jobs-section">

      <div class="inner" style="padding-top: 40px;padding-bottom: 40px">
        <div class="container">

          <div class="section-top-content flex items-center">
            <h1>{{report.reportName}}</h1>
            <span><a href="#a" v-on:click="isShowRawData=!isShowRawData">
              <span v-if="isShowRawData">收起</span>
              <span v-else>查看 </span>
              原始数据</a>
            </span>
          </div> <!-- end .section-top-content -->

          <div class="jobs-table">

            <div class="table-header">
              <div class="table-cells flex">
                <div class="job-title-cell"><h6>指标</h6></div>
                <div class="job-type-cell"><h6>类型</h6></div>
                <div class="job-type-cell"><h6>来源</h6></div>
                <div class="location-cell"><h6>因子数值</h6></div>
                <div class="expired-date-cell"><h6>更新时间</h6></div>
                <!--<div class="salary-cell"><h6>查看详情</h6></div>-->
              </div> <!-- end .table-cells -->
            </div> <!-- end .table-header -->

            <div class="table-row" v-for="factor in report.factors">
              <div class="table-cells flex no-wrap">

                <div class="cell job-title-cell flex no-column no-wrap">
                  <div class="cell-mobile-label">
                    <h6>因子名</h6>
                  </div> <!-- end .cell-label -->
                  <img src="static/images/company-logo01.jpg" alt="company-logo" class="img-responsive">
                  <div class="content">
                    <h4>{{factor.name}}</h4>
                    <p class="small">{{factor.desc}}</p>
                  </div> <!-- end .content -->
                </div> <!-- end .job-title-cell -->

                <div class="cell job-type-cell flex no-column">
                  <div class="cell-mobile-label">
                    <h6>描述</h6>
                  </div> <!-- end .cell-label -->
                  <button type="button" class="button full-time">{{factor.type==null?"暂无":factor.type}}</button>
                </div> <!-- end .job-type-cell -->

                <div class="cell job-type-cell flex no-column">
                  <div class="cell-mobile-label">
                    <h6>来源</h6>
                  </div> <!-- end .cell-label -->
                  <p>{{factor.provider}}</p>
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

                <!--<div class="cell salary-cell flex no-column no-wrap">-->
                <!--<div class="cell-mobile-label">-->
                <!--<h6>详情</h6>-->
                <!--</div> &lt;!&ndash; end .cell-label &ndash;&gt;-->
                <!--&lt;!&ndash;<p><sup>$</sup>60<span>/hour</span></p>&ndash;&gt;-->
                <!--<a href="#">点击查看</a>-->
                <!--</div> &lt;!&ndash; end .salray-cell &ndash;&gt;-->

              </div> <!-- end .table-cells -->
            </div> <!-- end .table-row -->

          </div> <!-- end .jobs-table -->

        </div> <!-- end .container -->
      </div> <!-- end .inner -->
    </div> <!-- end .section -->
    <block-history
      id="block-history"
      v-if="isShowRawData"
      :subject="report.subject"
      :bizType="report.bizType"
    ></block-history>
  </div>
</template>

<script>
  import BlockHistory from "../BlockHistory";

  export default {
    components: {BlockHistory},
    name: "reportContent",
    props: ['report'],
    data() {
      return {
        isShowRawData: false
      }
    }
  }
</script>

<style scoped>

</style>
