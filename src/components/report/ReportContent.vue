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
              </div> <!-- end .table-cells -->
            </div> <!-- end .table-header -->

            <!--文字因子-->
            <div class="table-row"
                 v-for="factor in report.factors">
              <text-factor :factor="factor" v-if="isNotGraph(factor.desc)"></text-factor>
            </div> <!-- end .table-row -->

            <!--图片因子-->
            <div class="table-row"
                 v-for="pair in getGraphFactorPairs()">
              <div class="table-cells flex no-wrap">
                <graph-factor :pair="pair"></graph-factor>
              </div>
            </div>

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

  import TextFactor from "./factor/TextFactor";
  import GraphFactor from "./factor/GraphFactor";

  export default {
    components: {
      GraphFactor,
      TextFactor,
      BlockHistory
    },
    name: "reportContent",
    props: ['report'],
    data() {
      return {
        isShowRawData: false
      }
    },
    methods: {
      isGraph: function (desc) {
        try {
          return desc.indexOf("图") >= 0;
        } catch (e) {
          return false;
        }
      },
      isNotGraph: function (desc) {
        return !this.isGraph(desc);
      },
      getGraphFactorPairs: function () {
        let pairs = new Array();
        let idx = 0;
        let pPre = true;
        for (let factor of this.report.factors) {
          // let factor = this.report.factors;
          console.log(factor);
          if (this.isGraph(factor.desc)) {
            if (pPre) {
              pairs.push(new Array(factor));
            } else {
              pairs[idx].push(factor);
              idx++;
            }
            pPre = !pPre
          }
        }
        console.log(pairs);
        return pairs;
      }
    }
  }
</script>

<style scoped>
</style>
