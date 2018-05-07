<template>
  <div>

    <search-report
      v-on:search:report="result = $event"
    ></search-report>

    <ReportContent
      v-for="report in result.reports"
      :report="report"
    ></ReportContent>

  </div>
</template>

<script>
  import ReportContent from "./ReportContent";
  import SearchReport from "./SearchReport";

  export default {
    name: "report",
    components: {
      SearchReport,
      ReportContent
    },
    data() {
      return {
        result: {
          errMsg: "",
          reports: [
            {
              desc: "信用卡报告-DATAHUB",
              factors: {
                "信用卡逾期总次数": {
                  "name": "信用报告项目",
                  "value": "快来生成吧",
                  "type": "未生成",
                  "gmtCreated": "无"
                }
              },
              gmtCreated: 1524991305640,
              reportName: "生成你的信用报告"
            }
          ],
          "status": true
        }
      }
    }
  }
</script>

<style scoped>

</style>
